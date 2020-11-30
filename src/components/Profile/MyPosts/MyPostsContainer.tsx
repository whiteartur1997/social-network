import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import { StoreType } from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
  store: StoreType
}

const MyPostsContainer:React.FC<MyPostsContainerType> = (props) => {

  function addPostCallback() {
    props.store.dispatch(addPostAC())
  }

  function updateNewPostText(newText: string) {
    props.store.dispatch(updateNewPostTextAC(newText))
  }


  return <MyPosts 
    posts={props.store.getState().profilePage.posts} 
    newPostText={props.store.getState().profilePage.newPostText}
    addPost={addPostCallback}
    updateNewPostText={updateNewPostText}
  />;
};

export default MyPostsContainer;
