import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

const ImageContent = props => { // all variables comes from Gallery.js
    return (
        <div className="image-content">
            <img src={props.imageLink} alt=""/>
            <div className="btm-content">
                <div className="left">
                    <a href={props.downloadLink}>
                        <FontAwesomeIcon icon={faArrowCircleDown}/>
                    </a>
                </div>
                <div className="right">
                    <div className="username">
                        by {props.username}
                    </div>
                    <div className="user-pic">
                        <img src={props.userPic} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImageContent;