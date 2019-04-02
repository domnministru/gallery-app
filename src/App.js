import React, { Component } from "react";
import Content from "./components/Content";

export default class App extends  Component{
    render() {
        return (
            <div className="container-fluid">
                <Content/>
            </div>
        );
    }
}