import {  
    FETCH_ALL_HISTORY_SUCCESS,
    FETCH_ALL_HISTORY_LOADING,
    FETCH_ALL_HISTORY_FAILURE
} from '../actionTypes/constants'
import { toast  } from 'react-toastify';
import { apiHandler } from '../../services/apiHandler';


export const fetchAllHistory = () => {

    return async (dispatch) => {
        dispatch({type:FETCH_ALL_HISTORY_LOADING})
        apiHandler.get("history" )
        .then((response)=>{   
            console.log("🚀 ~ response", response)

            dispatch({
                type: FETCH_ALL_HISTORY_SUCCESS,
                payload: response.data});
        })
        .catch((err)=>{
            dispatch({
                type: FETCH_ALL_HISTORY_FAILURE ,
                payload: 'Network error'
            });
            toast.error(err?.message)
        })
    };
};
