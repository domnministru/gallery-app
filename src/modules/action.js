import axios from 'axios';
import {APP_ID} from "../token";

export const FETCH_IMAGES_REQUEST   = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

export const fetchImagesBegin = () => ({
    type: FETCH_IMAGES_REQUEST
});

export const fetchImagesSuccess = data => ({
    type: FETCH_IMAGES_SUCCESS,
    data
});

export const fetchImagesFailure = error => ({
    type: FETCH_IMAGES_FAILURE,
    error
});

export const fetchImages = (query = 'view') => {
    return dispatch => {
        dispatch(fetchImagesBegin());
        axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=25&query=${query}&client_id=${APP_ID}`)
            .then(result => {
                console.log(result);
                dispatch(fetchImagesSuccess(result.data.results));
            })
            .catch(error => dispatch(fetchImagesFailure(error)));
    };
};
