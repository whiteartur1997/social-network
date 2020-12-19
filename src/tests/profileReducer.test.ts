import profileReducer, { ProfilePageType } from "../redux/profileReducer";

let initialState: ProfilePageType;

beforeEach(() => {
    initialState = {
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
    }
})

test("new post should be added", () => {
    const newState = profileReducer(initialState, { type: "ADD-POST" });

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("");
    expect(newState.posts[2].name).toBe("Bruce Wayne");
});

test("new post text should be updated", () => {
    const newState = profileReducer(initialState, { type: "UPDATE-NEW-POST-TEXT", newText: "Dana" });

    expect(newState.newPostText).toBe("Dana");
});