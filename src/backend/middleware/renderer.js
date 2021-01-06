import React from 'react';
import path from 'path';
import fs from 'fs';

import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { StaticRouter } from 'react-router-dom';

import { Context, ContextProvider } from '../../frontend/context';

import App from '../../../src/frontend/app';

import manifest from '../../../dist/frontend/manifest.json';

// function to map chunk names to assets
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

export default (req, res, next) => {
    
    // get the html file created by CRA's build tool
    const filePath = path.join(__dirname, '../../../dist/frontend', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end();
        }

        const modules = [];

        // render the app as a string
        const html = ReactDOMServer.renderToString((
            <Context provider={ContextProvider}>
                <Loadable.Capture report={m => modules.push(m)}>
                {/* <StaticRouter location={req.url} context={Context}> */}
                    <App />
                {/* </StaticRouter> */}
                </Loadable.Capture>
            </Context>
        ));

        const extraChunks = extractAssets(manifest, modules)
            .map(c => `<script type="text/javascript" src="/${c}"></script>`);


        // now inject the rendered app into our html and send it
        return res.send(
            htmlData
                .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
                .replace('</body>', extraChunks.join('') + '</body>')
        );
    });
}