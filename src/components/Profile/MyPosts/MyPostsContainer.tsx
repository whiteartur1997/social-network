import { connect } from "react-redux";
import { Dispatch } from "redux";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profileReducer";
import { AppStateType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MapStateToPropsType = {
  posts: PostType[]
  newPostText: string
}

type MapDispatchToPropsType = {
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    updateNewPostText: (newText: string) => {
      dispatch(updateNewPostTextAC(newText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, MapDispatchToProps)(MyPosts);


export default MyPostsContainer;
