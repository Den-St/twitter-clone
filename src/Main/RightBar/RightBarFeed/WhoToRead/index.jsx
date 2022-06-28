import React from "react";
import {WhoToReadContainer, WhoToReadHeader, WhoToReadProfiles, WhoToReadWrapper} from "./style";
import {WhoToReadProfile} from "./WhoToReadProfile";
import {ShowMoreButton} from "../TopicList/style";
import {AvatarUrl} from "../../../../Icon/paths";

const profiles = [
    {avatarUrl:AvatarUrl,
        userName:'Emmanuel Macron',
        userLogin:'@EmmanuelMacron'
    },
    {avatarUrl:AvatarUrl,
        userName: 'Denis Stuenko',
        userLogin:'@denisrrekt'
    },
    {avatarUrl:AvatarUrl,
        userName:'гостра курка',
        userLogin:'@kuriza_gunbao'
    }]
export const WhoToRead = () =>{
    return <WhoToReadContainer>
        <WhoToReadWrapper>
            <WhoToReadHeader>
                Кого читать
            </WhoToReadHeader>
            <WhoToReadProfiles>
                {profiles.map((el,index)=><WhoToReadProfile key={index} avatarUrl={el.avatarUrl} userName={el.userName} userLogin={el.userLogin}/>)}
            </WhoToReadProfiles>
            <ShowMoreButton>Показать еще</ShowMoreButton>
        </WhoToReadWrapper>
    </WhoToReadContainer>
}