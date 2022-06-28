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
import {ChooseAudience, ChooseAudience2} from "../../../ChooseAudience";

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

export const Input = ({addPost}) =>{
    const [postText, setPostText] = useState('');
    const [isFocused, setFocus] = useState(false);
    const [isShowed, setShowed] = useState(false);
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);

    const onAdd = (e) =>{
        e.preventDefault();
        setFocus(false);
        setShowed(false);
        addPost(postText);
        setPostText('');
    }
    const makeFocus = () =>{
        setFocus(true);
        setShowed(true);
        console.log(isFocused);
    }

    const active1Toggle = (e) =>{
        e.preventDefault();
        setActive1(prevState => !prevState);
    }

    const active2Toggle = (e) => {
        e.preventDefault();
        setActive2(prevState => !prevState);
    }

    const active1Close = (e) =>{
        e.preventDefault();
        setTimeout(() => {
            setActive1(false);

        }, 200);
    }

    const active2Close = (e) =>{
        e.preventDefault();
        setTimeout(() => {
            setActive2(false);

        }, 200)
    }
    const onChangeText = (value) => setPostText(value)

    const numLetters = numberOfLetters(postText, 300);
    const activeButton = (isFocused && !!postText.trim()) && numLetters>0

    const [number,setNumber] = useState(1);

    const setChosenNumber = (n) => setNumber(n);


    return <InputContainer>

        <InputAvatarContainer>
            <AvatarButton>
                <AvatarImg src = {AvatarUrl}/>
            </AvatarButton>
        </InputAvatarContainer>

        <InputRightPart>
            <OpenButtonContainer $isShowed={isShowed} $focus={isFocused}>
                <OpenButton tabIndex={-1}  onBlur={active1Close} onClick={active1Toggle}>Открытый \/</OpenButton>
            </OpenButtonContainer>
            {isActive1 && <ChooseAudience/>}


            <InputBarContainer>
                <InputBar value={postText} onChange={onChangeText} onFocus={makeFocus} placeholder={'Что происходит?'}/>
            </InputBarContainer>

            <InfoContainer $isShowed={isShowed} $focus={isFocused}>
                <InfoText tabIndex={-1} onBlur={active2Close} onClick={active2Toggle}>{(number===1) && <> <SvgIcon width='25px' height='25px' fill={'#1d9bf0'} type = {'earth'}/> <span>Отвечать могут все пользователи</span></>}
                    {(number===2) && <><SvgIcon width='25px' height='25px' fill={'#1d9bf0'} type = {'earth'}/> <span>Отвечать могут пользователи, которых вы читаете</span></>}
                    {(number===3) && <><SvgIcon width='25px' height='25px' fill={'#1d9bf0'} type = {'earth'}/>  <span>Отвечать могут только пользователи, которых вы упоминаете</span></>}
                </InfoText>
            </InfoContainer>
            {isActive2 && <ChooseAudience2 setChosenNumber={setChosenNumber} number={number}/>}

            <ButtonsContainer $isShowed={isShowed} $focus={isFocused}>
                <MenuButtons>
                    {buttons.map((el, i) =><MenuButton $disabled={el.name==='location'} key={i}> <SvgIcon width = '24px' height = '24px'  type={el.name} key={el.id} fill={'#1d9bf0'} /> </MenuButton>)}
                </MenuButtons>
                <NumberOfLetters $isShowed={isShowed} $focus = {isFocused} $danger={numLetters<0}>{numLetters}</NumberOfLetters>
                <InputTweetButtonContainer>
                    <InputTweetButton onClick={onAdd} $active={activeButton}>Твитнуть</InputTweetButton>
                </InputTweetButtonContainer>
            </ButtonsContainer>
        </InputRightPart>

    </InputContainer>
}