import React from "react";
import {
    WhoToReadAvatar,
    WhoToReadAvatarContainer, WhoToReadButton,
    WhoToReadProfileContainer,
    WhoToReadProfileWrapper,
    WhoToReadUser, WhoToReadUserLogin, WhoToReadUserName
} from "./style";

export const WhoToReadProfile = (props) =>{
    return <WhoToReadProfileContainer>
        <WhoToReadProfileWrapper>

            <WhoToReadAvatarContainer><WhoToReadAvatar src={props.avatarUrl}/></WhoToReadAvatarContainer>

            <WhoToReadUser>
                <WhoToReadUserName><a>{props.userName}</a></WhoToReadUserName>
                <WhoToReadUserLogin>{props.userLogin}</WhoToReadUserLogin>
            </WhoToReadUser>

            <WhoToReadButton>Читать</WhoToReadButton>
        </WhoToReadProfileWrapper>
    </WhoToReadProfileContainer>
}