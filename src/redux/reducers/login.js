import {  
    LOGIN_FAILURE ,
    LOGIN_LOADING ,
    LOGIN_SUCCESS ,
    LOGOUT_SUCCESS
} from '../actionTypes/constants'
  
  const initialState = {data:'',loading:false,error:false};
    
  export const loginReducer = (state = initialState, action) => {
    console.log("🚀 ~ action", action)
    switch (action.type) {
      case LOGIN_LOADING:
        return {data:'',loading:true,error:false};
      case LOGIN_SUCCESS:
        return {data:action.payload,loading:false,error:false};
      case LOGIN_FAILURE:
        return {data:'', error:true,loading:false};
      case LOGOUT_SUCCESS:
        return {data:'',error:false,loading:false}
      default:
        return {...state};
    }
  };