import React from "react";
import {TopicItem} from "./TopicItem";
import {ListContainer, ListHeader, ListHeaderContainer, ListWrapper, ShowMoreButton} from "./style";

const topics = [
    {theme:'Украина',
    mainTopic:'Bayraktar',
    numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'},
    {theme:'Украина',
        mainTopic:'Bayraktar',
        numberTweets:'12,345'}
]

export const List = () =>{
    return <ListContainer>
        <ListWrapper>
            <ListHeaderContainer><ListHeader>Актуальные темы для вас</ListHeader></ListHeaderContainer>
            {topics.map((el,index)=><TopicItem key={index} theme={el.theme} mainTopic={el.mainTopic} numberTweets={el.numberTweets}/>)}
            <ShowMoreButton>Показать еще</ShowMoreButton>
        </ListWrapper>
    </ListContainer>
}