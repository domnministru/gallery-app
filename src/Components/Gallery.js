import React, {Component} from 'react';
import Image from "./Image";
import "./Gallery.css";

export default class Gallery extends Component {

    getGalleryImages = () => {
        return (
            <div className="gallery-container">
                {
                    this.props.data.map(img => (
                        <Image
                            key={img.id}
                            username={img.user.name}
                            userPic={img.user.profile_image.small}
                            downloadLink={img.urls.raw}
                            imageLink={img.urls.small}
                        />
                    ))
                }
            </div>
        )
    };

    showEmptyBox = () => (
        <div className="empty" />
    );

    render() {
        return this.props.data.length > 0
            ? this.getGalleryImages()
            : this.showEmptyBox()
    }
}