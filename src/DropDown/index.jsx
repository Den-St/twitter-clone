import React from "react";
import {DropDownContainer, DropDownWrapper} from "./style";

//position left-top left-bot right-top right-bot
export const DropDown = ({children, position}) =>{
    return <DropDownContainer position={position}>
        <DropDownWrapper>
            {children}
        </DropDownWrapper>
    </DropDownContainer>
}
