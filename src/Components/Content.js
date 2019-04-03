import React from 'react';
import Search from "./Search";
import Gallery from "./Gallery";
import axios from "axios";
import {APP_ID} from "../token";
import "./Content.css";

const LOADING_STATE = {
    loaded : 'Loaded' ,
    error : 'Error',
    in_progress : 'In progress'
};

export default class Content extends React.Component {
    state = {
        images: [],
        query: null,
        load_state : LOADING_STATE.in_progress
    };

    handleInputChange = (value) => {
        this.setState({ query: value})
    };

    performSearch = () => {
        function showFooter() { //default display value for footer is none
            document.getElementById('footer').style.display = "flex"
        }

        const { query } = this.state;

        if (query === null || query === "") {
            alert("Please insert a value");
        } else {
            this.setState({ load_state: LOADING_STATE.in_progress });
            axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=25&query=${query}&client_id=${APP_ID}`)
                .then(result => {
                    this.setState({
                        images: result.data.results,
                        load_state: LOADING_STATE.loaded
                    })
                })
                .catch(() => {
                    this.setState({ loadState: LOADING_STATE.error });
                });
            showFooter(); // show footer if we have content
        }
    };

    render () {
        return (
            <div className="main-content">
                <Search
                    handleInputChange={this.handleInputChange}
                    performSearch={this.performSearch}
                />

                { this.state.load_state === LOADING_STATE.loaded
                    ? <Gallery data = {this.state.images} />
                    : <div className="empty"> </div>
                }


            </div>
        )
    }
}

