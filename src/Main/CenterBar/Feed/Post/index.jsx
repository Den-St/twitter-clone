import React from "react";
import {
    AvatarButton, ButtonDigit, PostAuthorLogin,
    PostAuthorName,
    PostAvatarContainer,
    PostAvatarImg, PostButton, PostButtonsContainer,
    PostContainer, PostDate, PostTextContainer, PostThreeDotsButtonContainer,
    PostTopContainer, PostTopInfoContainer,
    PostWrapper, ThreeDotsButton
} from "./style";
import {AvatarUrl} from "../../../../Icon/paths";
import {SvgIcon} from "../../../../Icon/SvgIcon";

export const Post = () =>{
    return <PostContainer>
        <PostWrapper>

            <PostAvatarContainer>
                <AvatarButton>
                    <PostAvatarImg src={AvatarUrl}/>
                </AvatarButton>
            </PostAvatarContainer>

            <PostTopContainer>
                <PostTopInfoContainer>
                    <PostAuthorName>qqqqq</PostAuthorName>
                    <PostAuthorLogin>qqqqqqq</PostAuthorLogin>
                    <PostDate>qqqqqq</PostDate>
                </PostTopInfoContainer>
                <PostThreeDotsButtonContainer><ThreeDotsButton>qqq</ThreeDotsButton></PostThreeDotsButtonContainer>
            </PostTopContainer>

            <PostTextContainer>qwerwqerqwerqwerqwrerqwerqwerwqer</PostTextContainer>

            <PostButtonsContainer>
                <PostButton>
                    <SvgIcon/>
                    <ButtonDigit>123</ButtonDigit>
                </PostButton>
            </PostButtonsContainer>

        </PostWrapper>
    </PostContainer>
}