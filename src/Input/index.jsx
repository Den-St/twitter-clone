import React from "react";
import {StyledTextarea} from "./style";

export const TextArea = ({onChange,...props}) => {
    const handleChange = (e) => {
        onChange(e.target.value);
        console.log(e.scrollHeight);
        e.target.style.height = (e.target.scrollHeight)+"px";
    }
    return <StyledTextarea onChange={handleChange} {...props}/>
}