import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addPost, PostType} from "../../../redux/profileReducer";
import { AppStateType } from "../../../redux/redux-store";
import { AddPostFormType } from "./AddPost/AddPost";
import MyPosts from "./MyPosts";

type MapStateToPropsType = {
  posts: PostType[]
}

type MapDispatchToPropsType = {
  addPost: (newPostText: AddPostFormType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
  }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (newPostText: AddPostFormType) => {
      dispatch(addPost(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, MapDispatchToProps)(MyPosts);


export default MyPostsContainer;
