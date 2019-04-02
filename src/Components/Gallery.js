import React from 'react';
import Image from "./Image";
import "./Gallery.css";

const Gallery = props => {
    const result = props.data;
    let gallery;
    if (result.length > 0) {
        gallery = result.map( img =>
    <Image
        key={img.id}
        username = {img.user.name}
        userPic = {img.user.profile_image.small}
        downloadLink = {img.urls.raw}
        imageLink = {img.urls.small}
    />
    )
    } else {
        return(
            <div className="empty">

            </div>
        )
    }
    return(
        <div className="gallery-container">
            {gallery}
        </div>
    )
}

export default Gallery;