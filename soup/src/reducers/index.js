import {FETCH_START, FETCH_SUCCESS} from '../actions';

const initialState = {
    data: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return{
                
            }
    }
}