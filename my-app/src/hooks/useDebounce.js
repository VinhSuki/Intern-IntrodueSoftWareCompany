import { useEffect, useState } from "react";

const useDebounce = (state,delay)=>{
    const [debounced ,setDebounced] = useState(state);
    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebounced(state);
        },delay)
        return ()=>clearTimeout(timerId);
    },[state,delay])
    return debounced;
}

export default useDebounce;