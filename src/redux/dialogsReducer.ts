import { ActionsTypes, DialogsPageType } from "./store";

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
            avatar: require("./../img/einstein.png")
        },
        {
            name: "Kurt Cobain",
            id: 2,
            preview: "When the lights out it's less dangerous",
            time: "8:43",
            avatar: require("./../img/kurtCobain.png")
        },
        {
            name: "Steve Jobs",
            id: 3,
            preview: "It’s really clear that the most precious resource we all have is time",
            time: "9:23",
            avatar: require("./../img/steveJobs.png")
        },
        { name: "Luis Suarez", id: 4, preview: "Bite bite", time: "7:23", avatar: require("./../img/suarez.png") },
    ],
    messages: [
        {
            id: 1,
            name: "Bruce Wayne",
            description: "Yo bro. Let's rescue this world",
            time: "13:33",
            fromMe: true,
            avatar: require('./../img/batman.png')
        },
        {
            id: 2,
            name: "Albert Einstein",
            description: "Yeah man. Come on",
            time: "12:33",
            fromMe: false,
            avatar: require('./../img/einstein.png')
        },
    ],
    newMessageText: ""
};

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage = {
                id: 3,
                name: "Bruce Wayne",
                description: state.newMessageText,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                fromMe: true,
                avatar: require('./../img/batman.png')
            }
            const stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }

        case "UPDATE-NEW-POST-MESSAGE": {
            const stateCopy = { ...state };
            stateCopy.newMessageText = action.newText;
            return stateCopy;
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
        type: "UPDATE-NEW-POST-MESSAGE",
        newText: newText
    } as const;
}

export default dialogsReducer;
