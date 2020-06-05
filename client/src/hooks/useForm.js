import { useState } from 'react'
import useLocalStorage from "./useLocalStorage";

export default function useForm(key, initialValue) {
    const [values, setValues] = useLocalStorage(key, initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
        localStorage.clear()
      };

    return [values, handleChanges, handleSubmit, showSuccessMessage]
}