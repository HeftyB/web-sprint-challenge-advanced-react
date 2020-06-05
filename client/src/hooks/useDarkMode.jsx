import { useEffect } from 'react'
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {

    const [ someValue, setsomeValue ] = useLocalStorage("Dark Mode")

    useEffect( () => {
        let body = document.querySelector("body");
        someValue ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
    }, [someValue])

    return [ someValue, setsomeValue ]
}