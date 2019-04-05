import React, {Component} from 'react';
import Image from "./Image";
import "./Gallery.css";

export default class Gallery extends Component {
    render() {
        return (
            <div className="gallery-container">
                <Image/>
            </div>
        )
    }
}