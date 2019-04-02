import React from 'react';
import Search from "./Search";
import Gallery from "./Gallery";
import axios from "axios";
import {APP_ID} from "../token";
import "./Search.css";

export default class Content extends React.Component {
    state = {
        images: [],
        query: null,
    };

    handleInputChange = (value) => {
        this.setState({ query: value})
    };

    performSearch = () => {
        const { query } = this.state;
        if (query === null || query === "") {
            alert("Please insert a value");
        } else {
            axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=25&query=${query}&client_id=${APP_ID}`)
                .then(result => {
                    this.setState({
                        images: result.data.results
                    })
                })
        }
    };

    render () {
        return (
            <div className="main-content">
                <Search
                    handleInputChange={this.handleInputChange}
                    performSearch={this.performSearch}
                />
                <Gallery
                    data = {this.state.images}
                />
            </div>
        )
    }
}

