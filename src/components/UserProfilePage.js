import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { fetchUserData } from "../actions/userProfileActions";



const UserProfilePage = () =>{
    const loading = useSelector(state => state.loginResponse.loading)
    const data = useSelector(state => state.loginResponse.data)
    

    console.log("profile page data >>",data);

    const navigate = useNavigate();

    useEffect(()=>{
        if(!loading && data !== null){
            const successToast = () => toast.success("Login Successfully !!");
            successToast();
        }else{
            const warningToast = () => toast.warn('Please Login', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            warningToast();
            setTimeout(() => {
                navigate("/");
            }, 2500);
        }
    },[data,loading,navigate])

    const userLoading = useSelector(state => state.userData.loading);
    const userData = useSelector(state => state.userData.data);
    const userError = useSelector(state => state.userData.error);

    console.log("profile page >> ",userData);
    const dispatch = useDispatch()

    useEffect(()=>{
        // console.log("profile page >>",data);
        dispatch(fetchUserData(data.id))
    },[dispatch])

    return(
        <div>
            <ToastContainer position="top-center"/>
            <h2 style={{textAlign:"center"}}>User Profile</h2>
            { 
                userData && !userLoading ?
                (
                    <div className="card">
                        <br/>
                        <img src={userData.image} className="round"/>
                        <h3>{userData.firstName} {userData.lastName}</h3>
                        <p>{userData.email}</p>
                        <p>{userData.phone}</p>
                        {/* <p>{userData.address.city}</p> */}
                        <br/><br/>
                    </div>
                ) : 
                (
                    <div>
                        <h1>{userError}</h1>
                    </div>
                )
                
            }
        </div>
    )
}

export default UserProfilePage