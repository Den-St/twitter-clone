import React from "react";
import {CenterBarContainer} from "./style";
import {CenterHeader} from "./CenterHeader";
import {Feed} from "./Feed";

export const CenterBar = () =>{

    return <CenterBarContainer>
        <CenterHeader/>
        <Feed/>
    </CenterBarContainer>
}