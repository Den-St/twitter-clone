import React from "react";
import {LeftBarMenuContainer} from "./style";
import {LeftBarMenuWrapper} from "./style";
import {LeftBarMenuDirectories} from "./LeftBarMenuDirectories";
import {LeftBarMenuProfile} from "./LeftBarMenuProfile";

export const LeftBarMenu = () =>{
    return <LeftBarMenuContainer>
        <LeftBarMenuWrapper>
            <LeftBarMenuDirectories/>
            <LeftBarMenuProfile/>
        </LeftBarMenuWrapper>
    </LeftBarMenuContainer>
}