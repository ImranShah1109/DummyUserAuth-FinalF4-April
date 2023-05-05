import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "../actions/actionTypes";

const initialLoginState = {
    loading : true,
    data : [],
    error : ""
}

const loginReducer = (state=initialLoginState,action) => {
    switch (action.type) {
        case LOGIN_REQUEST: 
            return{
                ...state,
                loading : true
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        
        case LOGIN_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
    
        default:
            return state
    }
}

export default loginReducer;