import React from "react";
import {CenterHeaderContainer, CenterHeaderWrapper, MainButton, MainText} from "./style";
import {StarsSvg} from "../../../Icon/paths";

export const CenterHeader = () =>{
    return <CenterHeaderContainer>
        <CenterHeaderWrapper>
            <MainText>Главная</MainText>
            <MainButton><StarsSvg/></MainButton>
        </CenterHeaderWrapper>
    </CenterHeaderContainer>
}