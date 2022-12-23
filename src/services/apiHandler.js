import axios from "axios"
import { history } from "../App";
import { toast  } from 'react-toastify';

const commonApiHandler = () => {

    let instance = axios.create({
        baseURL: 'https://api.spacexdata.com/v3/',
        headers: {
            'Content-Type': 'application/json'       
        } 
      
    })
   
    return instance
}



export const apiHandler = commonApiHandler()

