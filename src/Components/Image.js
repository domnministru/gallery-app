import React from 'react';
import ImageContent from "./ImageContent";
import "./Image.css";

const Image = ({ ...props }) => {
    return(
        <div className="image">
            <ImageContent { ...props } />
        </div>
        )
};

export default Image;