import React, {useState} from "react";
import {Modal} from "../../../../Modal";
import {SvgIcon} from "../../../../Icon/SvgIcon";
import {
    CrossButton,
    CrossContainer,
    EditConfirmButton,
    EditingInput, EditingPostContainer, EditingPostMainContainer, Line,
    PostAuthorLogin,
    PostAuthorName,
    PostDate,
    PostTextContainer,
    PostTopInfoContainer, PrevPostAvatar,
    PrevPostAvatarContainer,
    PrevPostContainer, PrevPostMainContainer,
} from "./style";
import {
    ButtonsContainer,
    InputTweetButtonContainer,
    MenuButton,
    MenuButtons,
    NumberOfLetters
} from "../../Input/style";
import {numberOfLetters} from "../../../../helpers/common";

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

export const EditPost = (props) => {
    const [isFocused,setFocused] = useState(false);
    const makeFocus = () =>{setFocused(true)}
    const makeBlur = () =>{setTimeout(()=>setFocused(false),200)}
    const numLetters = numberOfLetters(props.editedText, 300);
    const activeButton = (isFocused && !!props.editedText.trim()) && numLetters>0;

    const close = (e) => {
        e.preventDefault()
        props.setEditing(false);
    }
    return <Modal>
        <CrossContainer><CrossButton onClick={close}><SvgIcon type={'cross'}/></CrossButton></CrossContainer>
        <PrevPostContainer>
            <PrevPostAvatarContainer><PrevPostAvatar src={props.avatarSrc}/><Line/></PrevPostAvatarContainer>

            <PrevPostMainContainer>
                <PostTopInfoContainer>
                    <PostAuthorName>{props.userName}</PostAuthorName>
                    <PostAuthorLogin>{props.userLogin}</PostAuthorLogin>
                    <PostDate>{props.time}</PostDate>
                </PostTopInfoContainer>

                <PostTextContainer>{props.text}</PostTextContainer>

            </PrevPostMainContainer>

        </PrevPostContainer>
        <EditingPostContainer>
            <PrevPostAvatarContainer><PrevPostAvatar src={props.avatarSrc}/></PrevPostAvatarContainer>
            <EditingPostMainContainer>
                <EditingInput placeholder={'Что происходит?'} value={props.editedText} onChange={props.editText} onFocus={makeFocus} onBlur={makeBlur}/>
                <ButtonsContainer $isShowed={props.isShowed} $focus={props.isFocused}>
                    <MenuButtons>
                        {buttons.map((el, i) =><MenuButton $disabled={el.name==='location'} key={i}> <SvgIcon width = '24px' height = '24px'  type={el.name} key={el.id} fill={'#1d9bf0'} /> </MenuButton>)}
                    </MenuButtons>
                    <NumberOfLetters $isShowed={props.isShowed} $focus = {props.isFocused} $danger={numLetters<0}>{numLetters}</NumberOfLetters>
                    <InputTweetButtonContainer>
                        <EditConfirmButton editedText={props.editedText} onClick={props.onConfirm} $active={activeButton}>confirm</EditConfirmButton>
                    </InputTweetButtonContainer>
                </ButtonsContainer>


            </EditingPostMainContainer>
        </EditingPostContainer>

    </Modal>
}