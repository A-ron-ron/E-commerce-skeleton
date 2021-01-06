// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom";

// import { ContextProvider } from "./context";
// import App from "./app";


// ReactDOM.render(
//     <ContextProvider>
//         <Router>
//             <App />
//         </Router>
//     </ContextProvider>,
//     document.getElementById("root")
// );



import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

// import './index.css';
import App from './App';


window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            <App/>,
            document.getElementById('root')
        );
    });
};