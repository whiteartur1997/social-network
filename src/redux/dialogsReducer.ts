import {ActionsTypes} from "./redux-store";

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessageText: string
}

export type DialogItemType = {
    name: string
    id: number
    preview: string
    time: string
    avatar: string
};

export type MessageItemType = {
    id: number
    name: string
    description: string
    time: string
    fromMe: boolean
    avatar: string
};

// нам нужен инит стейт для каждой ветки, так как redux при первой загрузке
// приложения сам диспатчит action, при этом наш state - undefined
// теперь при первой загрузке наш state будет равен initial state
let initialState: DialogsPageType = {
    dialogs: [
        {
            name: "Albert Einstein",
            id: 1,
            preview: "Anyone who has never made a mistake has never tried anything new",
            time: "8:23",
            avatar: require("./../assets/img/einstein.png")
        },
        {
            name: "Kurt Cobain",
            id: 2,
            preview: "When the lights out it's less dangerous",
            time: "8:43",
            avatar: require("./../assets/img/einstein.png")
        },
        {
            name: "Steve Jobs",
            id: 3,
            preview: "It’s really clear that the most precious resource we all have is time",
            time: "9:23",
            avatar: require("./../assets/img/einstein.png")
        },
        {
            name: "Luis Suarez",
            id: 4,
            preview: "Bite bite",
            time: "7:23",
            avatar: require("./../assets/img/suarez.png")
        },
    ],
    messages: [
        {
            id: 1,
            name: "Bruce Wayne",
            description: "Yo bro. Let's rescue this world",
            time: "13:33",
            fromMe: true,
            avatar: require("./../assets/img/batman.png")
        },
        {
            id: 2,
            name: "Albert Einstein",
            description: "Yeah man. Come on",
            time: "12:33",
            fromMe: false,
            avatar: require("./../assets/img/einstein.png")
        },
    ],
    newMessageText: ""
};

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage = {
                id: 3,
                name: "Bruce Wayne",
                description: state.newMessageText,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                fromMe: true,
                avatar: require('./../assets/img/batman.png')
            }
            return { ...state, messages: [...state.messages, newMessage], newMessageText: "" };
        }

        case "UPDATE-NEW-MESSAGE-TEXT": {
            return { ...state, newMessageText: action.newText };
        }

        default:
            return state;
    }
}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const;
}

export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const;
}

export default dialogsReducer;
