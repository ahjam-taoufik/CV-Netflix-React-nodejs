
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export const toastSuccess =({title,delay=2000})=>{
   
    return(
        toast.success(title, {
            autoClose: delay ,        
            position: toast.POSITION.TOP_RIGHT,
        })
       
        )
}

export const toastError =({title,delay=3000})=>{
 
    return(
        toast.error(title, {
            autoClose: delay,        
            position: toast.POSITION.TOP_RIGHT,
        })
       
        )
}