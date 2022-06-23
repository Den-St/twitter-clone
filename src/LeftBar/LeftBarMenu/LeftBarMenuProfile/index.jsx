import React from "react";
import {
    LeftBarMenuProfileContainer,
    LeftBarMenuProfileImg,
    LeftBarMenuProfileImgContainer,
    LeftBarMenuProfileLogin,
    LeftBarMenuProfileName,
    LeftBarMenuProfileTextContainer,
    LeftBarMenuProfileThreeDotsContainer
} from "./style";
import {AvatarUrl, ThreeDots} from "../../../Icon/paths";

export const LeftBarMenuProfile = () =>{

    return(<LeftBarMenuProfileContainer>

                <LeftBarMenuProfileImgContainer>
                    <LeftBarMenuProfileImg src = {AvatarUrl}/>
                </LeftBarMenuProfileImgContainer>

                <LeftBarMenuProfileTextContainer>
                    <LeftBarMenuProfileName>
                        Denis Stuenko
                    </LeftBarMenuProfileName>
                    <LeftBarMenuProfileLogin>
                        @denisrreekt
                    </LeftBarMenuProfileLogin>
                </LeftBarMenuProfileTextContainer>

                <LeftBarMenuProfileThreeDotsContainer>
                    <ThreeDots/>
                </LeftBarMenuProfileThreeDotsContainer>

    </LeftBarMenuProfileContainer>)
};