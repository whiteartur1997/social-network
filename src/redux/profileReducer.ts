import {ActionsTypes, PostType, ProfilePageType} from "./store";

// тоже самое, при первом диспатче action, который сделает
// redux, он возьмет этот стейт, а не undefined
let initialState: ProfilePageType = {
    posts: [
        {
            id: 1,
            avatar: require('./../img/einstein.png'),
            name: 'Albert Einstein',
            message: 'Hi, how are you?',
            likeCount: 2,
            time: "11:32"
        },
        {
            id: 2,
            avatar: require('./../img/batman.png'),
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
