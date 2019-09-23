import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getInventory = () => dispatch => {
    dispatch({type: FETCH_START});
        axios
            .get()
            .then(res => {
                dispatch({
                    type: FETCH_SUCCESS,
                    paylod: res
                })
            })
            .catch(err => console.log(err))
}