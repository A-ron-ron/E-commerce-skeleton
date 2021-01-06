import Router from './router';
import React, { Component } from 'react';
import Loadable from 'react-loadable';

import { Context } from "./context";

export default class App extends Component {   
    static contextType = Context;

    render() {
        return (<Router />);
    }
}