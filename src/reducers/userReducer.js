import { USER_DATA_REQUEST,USER_DATA_SUCCESS,USER_DATA_FAILURE } from "../actions/actionTypes";

const initialUserState = {
    loading : true,
    data : [],
    error : ""
}

const userReducer = (state=initialUserState,action) =>{
    switch (action.type) {
        case USER_DATA_REQUEST:
            return{
                ...state,
                loading : true
            }
        
        case USER_DATA_SUCCESS:
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        
        case USER_DATA_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
    
        default:
            return state;
    }
}


export default userReducer;