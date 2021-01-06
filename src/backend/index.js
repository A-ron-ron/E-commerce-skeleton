import express from 'express';
import path from 'path';
import Loadable from 'react-loadable';

import serverRenderer from './middleware/renderer';

import routes from './routes';


export default function server() {
    const app = express();

    // Setup public assets, especially for React access.
    app.use(express.static(path.join(__dirname, '../../dist/frontend/')));

    // Serve react-root, consider hash/urls history (SEO).
    // app.get('/index.html', (req, res) => res.sendFile(path.join(__dirname, '../../dist/frontend', 'index.html')));

    // root (/) should always serve our server rendered page
    app.use('^/$', serverRenderer);

    // API routes
    app.use(routes);

    // Start server request/response event cycle/port listening.
    Loadable.preloadAll().then(() => {
        app.listen(process.env.PORT, error => {
            if (error) return console.error(error);
            console.log('APP LISTENING: ' + process.env.PORT);
        });
    });


    return app;
}