import axios from "axios";
import {POST, GET} from "../../apis/requests";
import { toast } from "react-toastify";
import ActionTypes from "../actionTypes/actionTypes";
// import Cookies from "js-cookie";

const REGISTER =  (credentials, setLoading, navigate) => {
    return async (dispatch) => {
        try {
            const response = await POST('users/signup', credentials);

            toast.success("Register Successfull");
            navigate("/Login")
            dispatch({
                type : ActionTypes.SIGNUP,
                payload: response?.data
            })
        } catch (error) {
            toast.error("Register Error!");
            console.log(error);
        }
    }

};

const ADMIN_LOGIN = (credentials, navigate) => {
    return async (dispatch) => {
        try {
            const response = await POST('users/admin-login', credentials);
            // Cookies.set('token', response?.data?.token)
            localStorage.setItem("token", response.data.token);
            console.log("🚀 ~ return ~ response:", response)
            toast.success("Login Successfull...");
            navigate('/dashboard');
            dispatch({
                type: ActionTypes.ADMIN_LOGIN,
                payload: response?.data
            })
        } catch (error) {
            toast.error("Login Error!")
            console.log(error);
        }
    }
}

const LOGOUT = (navigate) => {
   return (dispatch) => {
    try {
        localStorage.removeItem("persist:root");
        toast.success("User Logout Successfully...");
        navigate("/");
        dispatch({
            type: ActionTypes.LOGOUT,
            payload: "User Logout Please Login again!"
        })
       } catch (error) {
        toast.error("Logout Error!");
       }
   }
}

export {REGISTER, ADMIN_LOGIN, LOGOUT}