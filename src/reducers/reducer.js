import {SEARCH_IMAGES} from '../actions/action';

const initState = {
    images : [],
    query : null,
};

const reducer = (state = initState, action)=> {
    if (action.type === SEARCH_IMAGES) {
        return {...state, images:action.payload};
    } else {
        return state;
    }
};

export default reducer();
