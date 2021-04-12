import { Action, Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { ThunkDispatch } from 'redux-thunk';
import { profileAPI } from "../API/API";
import { AddPostFormType } from '../components/Profile/MyPosts/AddPost/AddPost';
import { UserDescriptionFormDataType } from '../components/Profile/ProfileInfo/ProfileDescription/ProfileDescription';
import { ActionsTypes, AppStateType } from "./redux-store";

export type ProfilePageType = {
    profile: UserProfileType | null
    status: string
    posts: Array<PostType>
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
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "profile/SET-USER-PROFILE":
            return { ...state, profile: action.profile };
        case "profile/SET-USER-STATUS":
            return { ...state, status: action.status }
        case "profile/ADD-POST": {
            const newPost: PostType = {
                id: 5,
                message: action.newPostText.post,
                name: "Bruce Wayne",
                avatar: require('./../assets/img/batman.png'),
                likeCount: 0,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            }
            return { ...state, posts: [...state.posts, newPost] };
        }
        case "profile/REMOVE-POST":
            return { ...state, posts: state.posts.filter(post => post.id !== action.postId) }
        case "profile/SET-UPDATED-AVATAR":
            return {
                ...state,
                profile: action.profileWithUpdPhoto
            }
        default:
            return state
    }
}

// actions
export const addPost = (newPostText: AddPostFormType) => {
    return ({ type: "profile/ADD-POST", newPostText: newPostText }) as const;
}

export const removePost = (postId: number) => {
    return ({ type: "profile/REMOVE-POST", postId }) as const;
}

export const setUserProfileSuccess = (profile: UserProfileType) => {
    return ({ type: 'profile/SET-USER-PROFILE', profile }) as const;
}

export const setUserStatusSuccess = (status: string) => {
    return ({ type: 'profile/SET-USER-STATUS', status }) as const;
}

export const setUpdatedUserAvatar = (profileWithUpdPhoto: UserProfileType | null) => {
    return ({ type: 'profile/SET-UPDATED-AVATAR', profileWithUpdPhoto }) as const;
}


// thunks
export const setUserProfile = (userID: number | null) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getUserProfile(userID);
    dispatch(setUserProfileSuccess(res));
}

export const setUserStatus = (userID: number | null) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getUserStatus(userID)
    dispatch(setUserStatusSuccess(res));
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateUserStatus(status);
    if (res.resultCode === 0) {
        dispatch(setUserStatusSuccess(status));
    }
}

export const updateUserPhoto = (photo: File) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    const res = await profileAPI.updateUserAvatar(photo);
    if (res.resultCode === 0) {
        let profileToUpdate: UserProfileType | null = getState().profilePage.profile;
        if (profileToUpdate) {
            profileToUpdate = {
                ...profileToUpdate,
                photos: {
                    small: res.data.photos.small,
                    large: res.data.photos.large
                }
            }
        }
        dispatch(setUpdatedUserAvatar(profileToUpdate))
    }
}

export const updateUserProfile = (profileData: UserDescriptionFormDataType) => async (dispatch: ThunkDispatch<void, AppStateType, Action>, getState: () => AppStateType) => {
        const userId = getState().auth.id;
        const res = await profileAPI.updateUserInfo(profileData);
        if(res.resultCode === 0) {
            if(userId) {
                dispatch(setUserProfile(userId));
                return Promise.resolve("success");
            }
        } else {
            if(res.messages.length) {
                const errorObj: {[key: string]: string} = {};
                for(let message of res.messages) {
                    const startingPoint = message.indexOf("->", 0);
                    const errorField = message.slice(startingPoint + 2, message.length - 1).toLowerCase();
                    errorObj[errorField] = message;
                }
                dispatch(stopSubmit("profileDescription", {contacts : errorObj}))
            }
            return Promise.reject("error");
        }
    }

export default profileReducer;