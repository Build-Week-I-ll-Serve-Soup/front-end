import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getInventory = () => dispatch => {
    dispatch({type: FETCH_START});
        axiosWithAuth()
            .get('https://serve-soups.herokuapp.com/api/inventory')
            .then(res => {
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: res
                })
            })
            .catch(err => console.log(err))
}

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const signUp = (user, history) => {
    return dispatch => {
    dispatch({type: REGISTER_START});
    axios
        .post('https://serve-soups.herokuapp.com/api/auth/register', user)
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload: res});
            history.push('/login');
        })
        .catch(err => {
            dispatch({type: REGISTER_FAILURE, payload: err});
        })
    }
}
