import React from "react";
import {LeftBar} from "../LeftBar";
import {LayoutContainer} from "./style";
import {Main} from "../Main";

export const Layout = () =>{
    return <LayoutContainer>
        <LeftBar/>
        <Main/>
    </LayoutContainer>
}