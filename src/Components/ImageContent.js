import React from 'react';
import "./ImageContent.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

const ImageContent = props => {
    return(
        <div className="image-content">
            <img src={props.imageLink} alt=""/>
    
            <div className="btm-content">
                <div className="left">
                    <a href={props.downloadLink}> <FontAwesomeIcon icon={faArrowCircleDown} /> </a>
                </div>

                <div className="right">
                    <div className="username">
                        Created by {props.username}
                    </div>

                    <div className="user-pic">
                        <img src={props.userPic} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageContent;