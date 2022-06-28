import React from "react";
import {List} from "./TopicList";
import {WhoToRead} from "./WhoToRead";
import {BottomFeedInfo} from "./BottomFeedInfo";
import {RightBarFeedContainer} from "./style";


export const RightBarFeed = () =>{
    return <RightBarFeedContainer>
        <List/>
        <WhoToRead/>
        <BottomFeedInfo/>
    </RightBarFeedContainer>
}