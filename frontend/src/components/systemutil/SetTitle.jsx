import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
export const SetTitle = ({setTitle}) => {
    useEffect(()=>{
        document.title=setTitle;
    },[setTitle])
    return null;
}
