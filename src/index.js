import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { ContextProvider } from "./context";
import App from "./app";

import reportWebVitals from './dev/reportWebVitals';

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>,
    document.getElementById("root")
)

reportWebVitals();