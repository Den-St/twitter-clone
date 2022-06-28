import React, {useState} from "react";
import {
    AvatarButton,
    ButtonDigit,
    DeleteButton,
    DotContainer,
    EditButton,
    PostAuthorLogin,
    PostAuthorName,
    PostAvatarContainer,
    PostAvatarImg,
    PostButton,
    PostButtonsContainer,
    PostButtonWrapper,
    PostContainer,
    PostDate,
    PostMainContainer,
    PostTextContainer,
    PostThreeDotsButtonContainer,
    PostTopContainer,
    PostTopInfoContainer,
    PostWrapper,
    ThreeDotsButton
} from "./style";
import {AvatarUrl} from "../../../../Icon/paths";
import {SvgIcon} from "../../../../Icon/SvgIcon";
import {DropDown} from "../../../../DropDown";
import {EditPost} from "./Edit";


const buttons = [
    {type:'response',
    digit: '111' },
    {type:'retweet',
        digit: '222' },
    {type:'like',
        digit: '333' },
    {type:'share',
        digit: '' },
    {type:'stats',
        digit: '' },
]

export const Post = (props) =>{
    const [showDropDown, setShowDropDown] = useState(false);
    const [isEditing,setEditing] = useState(false);
    const [editedText,setEditedText] = useState('');

    const onEdit = (text) => {
        props.editPost(props.id,text)
    }
    const onDelete = () =>{
        props.deletePost(props.id);
    }

    const onBlur = (e) =>{
        e.preventDefault();
        setTimeout(()=>setShowDropDown(false),100);
    }
    const toggleShow = (e) =>{
        e.preventDefault();
        setTimeout(()=>setShowDropDown(prevShow => !prevShow),150);
    }

    const onEditing = () => {
        setEditing(true);
    }
    const editText = (value) =>  setEditedText(value);

    const onConfirm = (e) => {
        e.preventDefault()
        setEditing(false);
        onEdit(editedText);
        setEditedText('');
    }
    const [isFocused, setFocus] = useState(false);
    const [isShowed, setShowed] = useState(false);
    const makeFocus = () =>{
        setFocus(true);
        setShowed(true);
        console.log(isFocused);
    }

    return <PostContainer>
        <PostWrapper>

            <PostAvatarContainer>
                <AvatarButton>
                    <PostAvatarImg src={AvatarUrl}/>
                </AvatarButton>
            </PostAvatarContainer>
            <PostMainContainer>
                <PostTopContainer>
                    <PostTopInfoContainer>
                        <PostAuthorName>Denis Stuenko</PostAuthorName>
                        <PostAuthorLogin> @denisrrekt</PostAuthorLogin>
                        <PostDate> · 28 мин</PostDate>
                    </PostTopInfoContainer>
                    <PostThreeDotsButtonContainer>
                        <ThreeDotsButton tabindex={-1} onBlur={onBlur} onClick={toggleShow}><SvgIcon type={'threeDots'}/></ThreeDotsButton>
                        {showDropDown &&<DropDown position={'left-bot'}><DotButtons onDelete={onDelete} onEdit={onEditing}/></DropDown>}
                    </PostThreeDotsButtonContainer>
                </PostTopContainer>
                <PostTextContainer>{props.text}</PostTextContainer>

                <PostButtonsContainer>
                    <PostButtonWrapper>
                        {buttons.map((el) =>
                        <PostButton key={el.type}>
                            <SvgIcon type={el.type}/>
                            <ButtonDigit>{el.digit}</ButtonDigit>
                        </PostButton>)}
                    </PostButtonWrapper>
                </PostButtonsContainer>

                { isEditing && <EditPost setEditing={setEditing} makeFocus={makeFocus} isShowed={isShowed} text={props.text} avatarSrc={AvatarUrl} userName={'Denis Stuenko'} userLogin={'@denisrrekt'} time={' · 28 мин'} editedText={editedText} editText={editText} onConfirm={onConfirm}/>}

            </PostMainContainer>
        </PostWrapper>
    </PostContainer>
}

const DotButtons = ({onDelete,onEdit}) =>{

    return <DotContainer>
        <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        <EditButton onClick={onEdit}>Edit</EditButton>
    </DotContainer>
}

