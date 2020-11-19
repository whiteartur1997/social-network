import { ActionsTypes, PostType, ProfilePageType } from "./state";


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: 5,
        message: state.newPostText,
        name: "Bruce Wayne",
        avatar: require('./../img/batman.png'),
        likeCount: 0,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      }
      state.posts.push(newPost);
      state.newPostText = "";
    }
      return state;

    case "UPDATE-NEW-POST-TEXT": {
      state.newPostText = action.newText;
    }
      return state;
    default:
      return state
  }
}

export const addPostAC = () => {
  return {
    type: "ADD-POST"
  } as const;
}

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
  } as const;
}

export default profileReducer;
