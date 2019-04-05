import axios from 'axios';
import {APP_ID} from "../token";

export const SEARCH_IMAGES = 'SEARCH_IMAGES';

const makeActionCreator = (type) =>{
    return function (payload) {
        return {
            type,
            payload
        }
    }
};

export const searchImages = makeActionCreator(SEARCH_IMAGES);


export const SearchImage = (query) => {
    return(dispatch) => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=25&query=${query}&client_id=${APP_ID}`)
            .then(result => result.data())
            .then( data => {
                console.log(data);
                dispatch(searchImages(data.results));
            })
    }
};



