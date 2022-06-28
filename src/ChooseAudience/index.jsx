import React from "react";
import {
    CheckBox,
    ChooseAudience2ButtonContainer,
    ChooseAudienceButton, ChooseAudienceButton2,
    ChooseAudienceContainer,
    ChooseAudienceContainer2,
    ChooseAudienceHeader, ChooseAudienceHeader2, ChooseAudienceInfo2,
    ChooseAudienceWrapper, ChooseAudienceWrapper2, TickContainer
} from "./style";
import {SvgIcon} from "../Icon/SvgIcon";

export const ChooseAudience = () =>{
    return <ChooseAudienceContainer>
        <ChooseAudienceWrapper>
            <ChooseAudienceHeader>Выберите аудиторию</ChooseAudienceHeader>
            <ChooseAudienceButton><SvgIcon type={'earth'} width='24px' height='24px' /> <span>Открытый</span><TickContainer><SvgIcon type={'tick'} width='24px' height='24px' /></TickContainer></ChooseAudienceButton>
        </ChooseAudienceWrapper>
    </ChooseAudienceContainer>
}


export const ChooseAudience2 = ({setChosenNumber, number}) =>{

     return <ChooseAudienceContainer2>
        <ChooseAudienceWrapper2>
            <ChooseAudienceHeader2>Кто может отвечать?</ChooseAudienceHeader2>
            <ChooseAudienceInfo2>Выберите, кто может отвечать на этот твит. Упомянутым пользователям эта возможность доступна всегда.</ChooseAudienceInfo2>
            <ChooseAudience2ButtonContainer>
                <ChooseAudienceButton2 onClick={() => setChosenNumber(1)}><SvgIcon type={'earth'} width='24px' height='24px' /> <span>Все</span>{(number === 1)&&<CheckBox><SvgIcon width = '24px' height='24px' type={'tick'}/></CheckBox>}</ChooseAudienceButton2>
                <ChooseAudienceButton2 onClick={() => setChosenNumber(2)}><SvgIcon type={'chelik'} width='24px' height='24px' /> <span>Люди, которых вы читаете</span>{(number === 2)&&<CheckBox><SvgIcon width = '24px' height='24px' type={'tick'}/></CheckBox>}</ChooseAudienceButton2>
                <ChooseAudienceButton2 onClick={() => setChosenNumber(3)}><SvgIcon type={'sobaka'} width='24px' height='24px' /> <span>Только упомянутые вами пользователи</span>{(number === 3)&&<CheckBox><SvgIcon width = '24px' height='24px' type={'tick'}/></CheckBox>}</ChooseAudienceButton2>
            </ChooseAudience2ButtonContainer>
        </ChooseAudienceWrapper2>
    </ChooseAudienceContainer2>
}