declare const AuthenticationContext: any;

import * as React from "react";
import * as ReactDOM from "react-dom";

import Page from './pages/app/app';

import '../sass/style.scss';

class ReactApp {
    constructor() {}

    public init() {
        ReactDOM.render(<Page />, document.getElementById('addin-container'));
    }
}

const app = new ReactApp();
app.init();