import React, {useState} from "react";
import {SvgIcon} from "../../../../Icon/SvgIcon";
import {
    DeletedNotification,
    Theme,
    ThreeDotsButton,
    TopicItemContainer,
    TopicItemWrapper,
    TopicMainContainer,
    TopicTopInfoContainer, TopicTweetNumberContainer
} from "./style";
import {DropDown} from "../../../../DropDown";
import {DeleteButton} from "../../../CenterBar/Feed/Post/style";

export const TopicItem = (props) =>{
    const [isOpen,setOpen] = useState(false);
    const [isDeleted, setDelete] = useState(false);
    const onDelete = (e) => setDelete(true);
    const toggle = (e) =>{
        e.preventDefault();
        setOpen(prev => !prev);
    }
    const onBlur = (e) =>{
        e.preventDefault();
        setTimeout(()=>setOpen(false),200);
    }
    return <TopicItemContainer>
        {isDeleted && <DeletedNotification>Спасибо! Перезагрузите страницу, чтобы обновить эти актуальные темы.</DeletedNotification>}
        {!isDeleted && <TopicItemWrapper>

            <TopicTopInfoContainer>
                <Theme>Актуальные темы: {props.theme}</Theme>

                <ThreeDotsButton tabindex={-1} onBlur={onBlur} onClick={toggle}><SvgIcon type={'threeDots'}/></ThreeDotsButton>
                {isOpen && <DropDown><DeleteButton onClick={onDelete}>Delete</DeleteButton></DropDown>}
            </TopicTopInfoContainer>

            <TopicMainContainer>
                <span>{props.mainTopic}</span>
            </TopicMainContainer>

            <TopicTweetNumberContainer>
                <span>Твитов: {props.numberTweets}.</span>
            </TopicTweetNumberContainer>

        </TopicItemWrapper>}
    </TopicItemContainer>
}