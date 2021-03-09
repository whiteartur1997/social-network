import React from "react";
import {PostType} from "../../../redux/profileReducer";
import AddPost, {AddPostFormType} from "./AddPost/AddPost";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

type MyPostsType = {
    posts: PostType[]
    addPost: (newPostText: AddPostFormType) => void
}

const MyPosts: React.FC<MyPostsType> = React.memo((props) => {
    return (
        <>
            <div className={classes.posts}>
                <AddPost
                    addPost={props.addPost}
                />
            </div>
            <div className={classes.posts}>
                {props.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </>
    );
});

export default MyPosts;
