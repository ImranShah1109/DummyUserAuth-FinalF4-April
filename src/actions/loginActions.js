import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./actionTypes";
// import axios from "axios";

export const fetchLoginRequest = () =>({
    type : LOGIN_REQUEST
})

export const fetchLoginSuccess = (data) =>({
    type : LOGIN_SUCCESS,
    payload : data
})

export const fetchLoginFailure = (error) =>({
    type : LOGIN_FAILURE,
    payload : error
})


export const fetchLoginData = (username,password) => async(dispatch) =>{
    dispatch(fetchLoginRequest)

    // console.log("in login action > ",username,password);

    try{
        // let response = await axios.post('https://dummyjson.com/auth/login',
        //     {   
        //         username : username,
        //         password : password
        //     },
        //     {   headers: { 'content-type': 'text/json' } }
        // )

        let response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    
                    username: username,
                    password: password
                })
            })
        if(response.status === 200){
            let data = await response.json();
            console.log("in login action > ",data);
            dispatch(fetchLoginSuccess(data))
        }else{
            let error = await response.json();
            console.log("else part in action ",error);
            dispatch(fetchLoginFailure(error))
        }
        // console.log("response in login action >",response);
    }
    catch(error){
        dispatch(fetchLoginFailure(error))
        console.log(error);
    }
}