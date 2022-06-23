import React from "react";
import {CenterBar} from "./CenterBar";
import {RightBar} from "./RightBar";
import {MainContainer, MainWrapper} from "./style";

export const Main = () =>{
    return <MainContainer>
        <MainWrapper>
            <CenterBar/>
            <RightBar/>
        </MainWrapper>
    </MainContainer>
}