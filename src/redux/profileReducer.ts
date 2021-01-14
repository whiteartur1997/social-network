import { act } from '@testing-library/react';
import { Dispatch } from 'redux';
import { profileAPI } from "../API/API";
import { ActionsTypes } from "./redux-store";

export type ProfilePageType = {
    profile: UserProfileType | null
    status: string
    posts: Array<PostType>
    newPostText: string
}

export type PostType = {
    id: number
    avatar: string
    name: string
    message: string
    likeCount: number
    time: string
};

export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string | null,
        large: string | null
    }
}

// тоже самое, при первом диспатче action, который сделает
// redux, он возьмет этот стейт, а не undefined
let initialState: ProfilePageType = {
    profile: null,
    status: "",
    posts: [
        {
            id: 1,
            avatar: require('./../assets/img/einstein.png'),
            name: 'Albert Einstein',
            message: 'Hi, how are you?',
            likeCount: 2,
            time: "11:32"
        },
        {
            id: 2,
            avatar: require('./../assets/img/batman.png'),
            name: 'Bruce Wayne',
            message: 'My first steps in react!',
            likeCount: 24,
            time: "09:32"
        },
    ],
    newPostText: ""
};

// параметр по умолчанию
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }

        case "SET-USER-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }

        case "ADD-POST": {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                name: "Bruce Wayne",
                avatar: require('./../assets/img/batman.png'),
                likeCount: 0,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            }
            return { ...state, posts: [...state.posts, newPost], newPostText: "" };
        }

        case "UPDATE-NEW-POST-TEXT": {
            return { ...state, newPostText: action.newText };
        }

        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: "ADD-POST"
    } as const;
}

export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const;
}

export const setUserProfileSuccess = (profile: UserProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const;
}

export const setUserStatusSuccess = (status: string) => {
    return {
        type: 'SET-USER-STATUS',
        status
    } as const;
}

export const setUserProfile = (userID: string) => {
  return (dispatch: Dispatch) => {
    const userId = userID || "2";
    profileAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfileSuccess(data));
    });
  }
}

export const setUserStatus = (userID: string) => {
    return (dispatch: Dispatch) => {
        const userId = userID || "2";
        profileAPI.getUserStatus(userId).then(data => {
            dispatch(setUserStatusSuccess(data));
        })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus().then(data => {
            if(data.resultCode === 0) {
                dispatch(status);
            }
        })
    }
}

export default profileReducer;