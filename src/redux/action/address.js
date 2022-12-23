import {  
    FETCH_ALL_ADDRESS_SUCCESS,
    FETCH_ALL_ADDRESS_LOADING,
    FETCH_ALL_ADDRESS_FAILURE
} from '../actionTypes/constants'
import { toast  } from 'react-toastify';
import { apiHandler } from '../../services/apiHandler';


export const fetchAllAddress = () => {

    return async (dispatch) => {
        dispatch({type:FETCH_ALL_ADDRESS_LOADING})
        apiHandler.get("payloads" )
        .then((response)=>{      
            dispatch({
                type: FETCH_ALL_ADDRESS_SUCCESS,
                payload: response.data});
        })
        .catch((err)=>{
            dispatch({
                type: FETCH_ALL_ADDRESS_FAILURE ,
                payload: 'Network error'
            });
           toast.error(err?.message)
        })
    };
};
