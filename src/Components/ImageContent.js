import React from 'react';
import { connect } from "react-redux";

import "./ImageContent.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";


const ImageContent = () => {
    const image = this.props.image ? (
        <div className="image-content">
            <img src={this.props.image.imageLink} alt=""/>

            <div className="btm-content">
                <div className="left">
                    <a href={this.props.image.downloadLink}>
                        <FontAwesomeIcon icon={faArrowCircleDown}/>
                    </a>
                </div>

                <div className="right">
                    <div className="username">
                        by {this.props.image.username}
                    </div>

                    <div className="user-pic">
                        <img src={this.props.image.userPic} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="empty"> Loading Images... </div>
    )

    return (
        { image }
    )
};


const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.id;

    return {
        image: state.images.find((image) => {
            return image.id === id
        })
    }
};

export default connect(mapStateToProps)(ImageContent);