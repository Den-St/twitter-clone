import React, {useState} from "react";
import {FeedContainer} from "./style";
import {Post} from "./Post";
import {Input} from "../Input";



export const Feed = () =>{
    const [posts,setPosts] = useState([]);

    const addPost = (text) =>{
        setPosts([{id:Date.now(),text: text},...posts,])
    }
    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    };
    const editPost = (id,text) =>{
        console.log(id);
        setPosts(prevState => prevState.map(post => post.id === id ? ({id:post.id,text: text}):post))
    };
    return <>
        <Input addPost={addPost}/>
        <FeedContainer>
            {posts?.map((el, i) => <Post posts={posts} id={el.id} key={el.id} text={el.text} editPost={editPost} deletePost={deletePost}/>)}
        </FeedContainer>
        </>
}