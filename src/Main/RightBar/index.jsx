import React from "react";
import {RightBarContainer} from "./style";
import {Search} from "./Search";
import {RightBarFeed} from "./RightBarFeed";

export const RightBar = () =>{
    return <RightBarContainer>
            <Search/>
            <RightBarFeed/>
    </RightBarContainer>
}