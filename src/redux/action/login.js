import {  
    LOGIN_FAILURE ,
    LOGIN_LOADING ,
    LOGIN_SUCCESS ,
    LOGOUT_SUCCESS
} from '../actionTypes/constants'



export const login = () => {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: "token"});
    };
};

export const logout = () => {

    return async (dispatch) => {
        dispatch({
            type: LOGOUT_SUCCESS 
        })
    };
};