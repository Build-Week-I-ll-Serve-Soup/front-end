import {FETCH_START, FETCH_SUCCESS} from '../actions';
import {REGISTER_START, REGISTER_SUCCESS} from '../actions';

const initialState = {
    inventory: [],
    isFetching: false,
    error: ""
}

export const invReducer = (state = initialState, action) => {
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

const initialUsers = {
    user: [],
    isAdding: false,
    error: ""
}

export const signupReducer = (state = initialUsers, action) => {
    switch(action.type){
        case REGISTER_START:
            return{
                ...state,
                isAdding: true,
                error: ""
            };
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAdding: false,
                user: action.payload
            };
        default:
            return state;
    }
}