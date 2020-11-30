import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import { StoreType } from "../../../redux/store";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
  store?: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerType> = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        function addPostCallback() {
          store.dispatch(addPostAC())
        }

        function updateNewPostText(newText: string) {
          store.dispatch(updateNewPostTextAC(newText))
        }

        return (
          <MyPosts
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
            addPost={addPostCallback}
            updateNewPostText={updateNewPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  )
};

export default MyPostsContainer;
