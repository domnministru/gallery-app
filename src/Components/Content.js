import React from 'react';
import Search from "./Search";
import Gallery from "./Gallery";
import "./Content.css";

export default class Content extends React.Component {
    render () {
        return (
            <div className="main-content">
                <Search />
                <Gallery />
            </div>
        )
    }
}

