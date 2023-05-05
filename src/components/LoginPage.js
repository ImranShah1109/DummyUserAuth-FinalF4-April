import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginData } from "../actions/loginActions";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () =>{

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.loginResponse.loading)
    const data = useSelector(state => state.loginResponse.data)
    const error = useSelector(state => state.loginResponse.error)

    const dispatch = useDispatch();

    function login(e){
        e.preventDefault();
        dispatch(fetchLoginData(username,password))
    }

    useEffect(()=>{
        if(!loading && data !== null && error === ''){
            console.log("Login Successfully",data);
            navigate('userprofile')
        }else if(error){
            console.log("error ",error);
            const errorToast = () => toast("Ooops!!! "+error.message);
            errorToast();
        }
    },[loading,data,error,navigate])


    return(
        <div>
            <ToastContainer position="top-center"/>
            <div className="login-box card">
                <br/>
                <h1>Login</h1>
                <input type="text" placeholder="Enter Your Username" value={username} onChange={(e) =>setUsername(e.target.value)}/><br/><br/>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <button type="submit" onClick={(e)=>login(e)}>Login</button>
                <br/><br/>
            </div>
        </div>
    )
}

export default LoginPage