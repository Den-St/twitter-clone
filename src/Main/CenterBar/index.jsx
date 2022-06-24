import React from "react";
import {CenterBarContainer} from "./style";
import {CenterHeader} from "./CenterHeader";
import {Input} from "./Input";
import {Feed} from "./Feed";

export const CenterBar = () =>{
    return <CenterBarContainer>
        <CenterHeader/>
        <Input/>
        <Feed/>
    </CenterBarContainer>
}