import React from 'react';
import {connect} from "react-redux";
import {fetchImages} from "../modules/action";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

class Image extends React.Component {
    componentDidMount() {
        this.props.fetchImages(this.query);
    }

    render() {
        const {error, loading, data} = this.props;
        if (error) console.log(error);
        if (loading) return <div>Loading...</div>;

        return (
            <div className="gallery-container">
                {data.map(img =>
                    <div className="image">
                        <div className="image-content" key={img.id}>
                            <img src={img.urls.small} alt=""/>
                            <div className="btm-content">
                                <div className="left">
                                    <a href={img.urls.raw}>
                                        <FontAwesomeIcon icon={faArrowCircleDown}/>
                                    </a>
                                </div>
                                <div className="right">
                                    <div className="username">
                                        by {img.user.name}
                                    </div>
                                    <div className="user-pic">
                                        <img src={img.user.profile_image.small} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
    error: state.error
});
const mapDispatchToProps = {
    fetchImages,
};
export default connect(mapStateToProps, mapDispatchToProps)(Image);