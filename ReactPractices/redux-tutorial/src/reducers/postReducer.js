import {FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    console.log("1");
    //console.log(action.type);
    switch (action.type) {
        case FETCH_POSTS:
            console.info("fetch");
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return  {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}