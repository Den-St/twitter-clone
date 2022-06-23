import React, {useState} from "react";
import {
    LeftBarMenuDirectoriesContainer, LeftBarMenuDirectoriesWrapper,
    LeftBarMenuDirectoryLogoButton,
    LeftBarMenuDirectoryLogoContainer,
    LeftBarMenuDirectoryLogoSvg, LeftBarTwitButton
} from "./style";
import {LeftBarMenuDirectoryItem} from "./LeftBarMenuDirectoryItems";
import {SvgIcon} from "../../../Icon/SvgIcon";

const directoryItems = [

    {id:1, icon: 'main',
    text: 'ГЛАВНАЯ'},

    {id:2, icon: 'view',
    text: 'Обзор'},

    {id:4, icon: 'notification',
    text: 'Уведомления'},

    {id:5, icon: 'messages',
    text: 'Сообщения'},

    {id:6, icon: 'stored',
    text: 'Закладки'},

    {id:7, icon: 'lists',
    text: 'Списки   '},

    {id:8, icon: 'profile',
    text: 'Профиль'},

    {id:9, icon: 'more',
    text: 'Еще'}
]


const current = 1;
export const LeftBarMenuDirectories = () =>{

    const [current, setCurrent] = useState(1);
    const onLinkClick = (id) => setCurrent(id);

    return <LeftBarMenuDirectoriesContainer>

        <LeftBarMenuDirectoryLogoContainer>
            <LeftBarMenuDirectoryLogoButton>
                <LeftBarMenuDirectoryLogoSvg>
                    <SvgIcon type={'logo'}/>
                </LeftBarMenuDirectoryLogoSvg>
            </LeftBarMenuDirectoryLogoButton>
        </LeftBarMenuDirectoryLogoContainer>
        <LeftBarMenuDirectoriesWrapper>
            {directoryItems.map((el) => <LeftBarMenuDirectoryItem onClick={onLinkClick} id = {el.id} isActive={current === el.id} icon = {el.icon} text = {el.text}/>)}
        </LeftBarMenuDirectoriesWrapper>
        <LeftBarTwitButton>Твитнуть</LeftBarTwitButton>
    </LeftBarMenuDirectoriesContainer>
}