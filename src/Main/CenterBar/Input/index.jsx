import React, {useState} from "react";
import {
    AvatarButton,
    AvatarImg,
    ButtonsContainer, InfoContainer, InfoText,
    InputAvatarContainer,
    InputBar,
    InputBarContainer,
    InputContainer,
    InputRightPart,
    InputTweetButton,
    InputTweetButtonContainer,
    MenuButton,
    MenuButtons, NumberOfLetters,
    OpenButton,
    OpenButtonContainer
} from "./style";
import {AvatarUrl} from "../../../Icon/paths";
import {SvgIcon} from "../../../Icon/SvgIcon";
import {numberOfLetters} from "../../../helpers/common";

const buttons = [
    {id:1
        ,name:'media'},
    {id:2
        ,name:'gif'},
    {id:3
        ,name:'poll'},
    {id:4
        ,name:'emoji'},
    {id:5
        ,name:'plan'},
    {id:6
        ,name:'location'}
]

export const Input = () =>{
    const [postText, setPostText] = useState('');
    const [isFocused, setFocus] = useState(false);

    const makeFocus = () =>{
        setFocus(true);
        console.log(isFocused)
    }
    const onBlur = () =>{
        setFocus(false);
    }
    const onChangeText = (value) => setPostText(value)

    const numLetters = numberOfLetters(postText, 300);
    const activeButton = (isFocused || !!postText) && numLetters>0
    return <InputContainer>

        <InputAvatarContainer>
            <AvatarButton>
                <AvatarImg src = {AvatarUrl}/>
            </AvatarButton>
        </InputAvatarContainer>

        <InputRightPart>
            <OpenButtonContainer $focus={isFocused}>
                <OpenButton>Открытый \/</OpenButton>
            </OpenButtonContainer>

            <InputBarContainer>
                <InputBar value={postText} onChange={onChangeText} onFocus={makeFocus} onBlur={onBlur} placeholder={'Что происходит?'}/>
            </InputBarContainer>

            <InfoContainer $focus={isFocused}>
                <InfoText><SvgIcon width='25px' height='25px' fill={'#1d9bf0'} type = {'earth'}/>Отвечать могут все пользователи</InfoText>
            </InfoContainer>

            <ButtonsContainer>
                <MenuButtons>
                    {buttons.map((el, i) =><MenuButton key={i}> <SvgIcon width = '24px' height = '24px'  type={el.name} key={el.id} fill={'#1d9bf0'} /> </MenuButton>)}
                </MenuButtons>
                <NumberOfLetters $focus = {isFocused} $danger={numLetters<0}>{numLetters}</NumberOfLetters>
                <InputTweetButtonContainer>
                    <InputTweetButton $active={activeButton}>Твитнуть</InputTweetButton>
                </InputTweetButtonContainer>
            </ButtonsContainer>
        </InputRightPart>

    </InputContainer>
}