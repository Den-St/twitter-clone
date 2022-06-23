import React from "react";
import {
    LeftBarMenuDirectoryItemButton,
    LeftBarMenuDirectoryItemContainer,
    LeftBarMenuDirectoryItemText,
    LeftBarMenuDirectoryItemWrapper
} from "./styled";
import {SvgIcon} from "../../../../Icon/SvgIcon";


export const LeftBarMenuDirectoryItem = ({icon, text, isActive,id, onClick}) =>{
    return <LeftBarMenuDirectoryItemContainer>
        <LeftBarMenuDirectoryItemButton onClick = {() => onClick(id)}>

            <SvgIcon width = '26px' height = '24px'  type={icon} $isActive={isActive}/>
            <LeftBarMenuDirectoryItemText $isActive={isActive}>{text}</LeftBarMenuDirectoryItemText>
        </LeftBarMenuDirectoryItemButton>
    </LeftBarMenuDirectoryItemContainer>
}