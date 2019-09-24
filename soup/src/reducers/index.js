import {FETCH_START, FETCH_SUCCESS} from '../actions';

const initialState = {
    inventory: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                inventory: action.payload
            };
        default:
            return state;
    }
}