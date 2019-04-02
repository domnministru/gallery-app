import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default class Search extends React.Component {
    handleInputChange = event => {
        this.props.handleInputChange(event.target.value);
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.performSearch();
    };

    render() {
        return (
            <div className="container search-container">
                <div className="search-area">
                    <h1> Get Image App </h1>
                    <p>Beautiful, free photos.<br/>
                        Gifted by the world’s most generous community of photographers.</p>
                    <div className="search">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary" type="button"
                                            onClick={this.handleSubmit}>
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </div>
                                <input type="text" className="form-control" onChange={this.handleInputChange}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}