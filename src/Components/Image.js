import React from 'react';
import ImageContent from "./ImageContent";
import "./Image.css";

const Image = props => {
    return(
        <div className="image">
            <ImageContent
                imageLink = {props.imageLink}
                username = {props.username}
                userPic = {props.userPic}
                downloadLink = {props.downloadLink}
            />
        </div>
        )
};

export default Image;