import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Toast = (message) => {
    return toast.dark(message , {
        position : toast.POSITION.BOTTOM_RIGHT,
        autoClose : 2000,
    })
};