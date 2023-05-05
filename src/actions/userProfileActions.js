import axios from "axios";
import { USER_DATA_FAILURE, USER_DATA_REQUEST, USER_DATA_SUCCESS } from "./actionTypes";



export const fetchUserDataRequest = () => ({
    type : USER_DATA_REQUEST
})

export const fetchUserDataSuccess = (data) => ({
    type : USER_DATA_SUCCESS,
    payload : data
})

export const fetchUserDataFailure = (error) => ({
    type : USER_DATA_FAILURE,
    payload : error
})


export const fetchUserData = (id) => async(dispatch) =>{
    console.log("userProfileAction >>>",id);
    dispatch(fetchUserDataRequest);

    try{
        let response = await axios.get(`https://dummyjson.com/users/${id}`);
        console.log("userProfileAction >>> ",response);
        dispatch(fetchUserDataSuccess(response.data));
    }
    catch(error){
        console.log("userProfileAction err >> ",error.message);
        dispatch(fetchUserDataFailure(error.message));
    }
}