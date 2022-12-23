import {  
  FETCH_ALL_HISTORY_SUCCESS,
    FETCH_ALL_HISTORY_LOADING,
    FETCH_ALL_HISTORY_FAILURE
} from '../actionTypes/constants'
  
  const initialState = {data:'',loading:false,error:false};
    
  export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_HISTORY_LOADING:
        return {data:'',loading:true,error:false};
      case FETCH_ALL_HISTORY_SUCCESS:
        return {data:action.payload,loading:false,error:false};
      case FETCH_ALL_HISTORY_FAILURE:
        return {data:'', error:true,loading:false};

      default:
        return {...state};
    }
  };