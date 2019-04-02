import React, { Component } from 'react';

import Content from "./components/Content";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowCircleDown);

export default class App extends  Component{
    render() {
        return (
            <div className="container-fluid">
                <Content />
            </div>
        );
    }
}