import {DialogsPageType, MessageItemType} from "../redux/store";
import dialogsReducer from "../redux/dialogsReducer";

let initialState: DialogsPageType;

beforeEach(() => {
    initialState = {
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
    }
})

test("new message should be added", () => {
    const newState = dialogsReducer(initialState, {type: "SEND-MESSAGE"});

    expect(newState.messages.length).toBe(3);
    expect(newState.messages[2].description).toBe("");
});

test("new message text should be updated", () => {
    const newState = dialogsReducer(initialState, {type: "UPDATE-NEW-MESSAGE-TEXT", newText: "Artur"});

    expect(newState.newMessageText).toBe("Artur");
});