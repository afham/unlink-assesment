import {  
    FETCH_ALL_ADDRESS_SUCCESS,
    FETCH_ALL_ADDRESS_LOADING,
    FETCH_ALL_ADDRESS_FAILURE
} from '../actionTypes/constants'
  
  const initialState = {data:'',loading:false,error:false};
    
  export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_ADDRESS_LOADING:
        return {data:'',loading:true,error:false};
      case FETCH_ALL_ADDRESS_SUCCESS:
        return {data:action.payload,loading:false,error:false};
      case FETCH_ALL_ADDRESS_FAILURE:
        return {data:'', error:true,loading:false};

      default:
        return {...state};
    }
  };