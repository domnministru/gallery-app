import React, { Component } from 'react';

import './App.css'
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowCircleDown);

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Content />
                <Footer />
            </div>
        );
    }
}