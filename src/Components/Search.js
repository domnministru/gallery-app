import React from 'react';
import "../Components/Search.css";
import "./Search.css";

export default class Search extends React.Component {

    handleInputChange = event => {
        this.props.handleInputChange(event.target.value);
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.performSearch();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container search-container">
                    <div className="search-area">
                        <h1> Get Image App </h1>
                        <p>Beautiful, free photos.<br/>
                            Gifted by the world’s most generous community of photographers.</p>
                        <div className="search">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button"
                                                onClick={this.handleSubmit.bind(this)}/>
                                    </div>
                                    <input type="text" className="form-control" onChange={this.handleInputChange} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}