import profileReducer, {addPost, PostType, ProfilePageType, removePost} from "./profileReducer";

let startState: ProfilePageType;

beforeEach(() => {

    startState = {
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
        ]
    }
})

test("The amount of posts should be incremented", () => {
    const action = addPost({post: "Hop hey"});

    const endState = profileReducer(startState, action);
    expect(endState.posts.length).toBe(3);
    expect(endState.posts[2].message).toBe("Hop hey")
})

test("Correct post should be removed", () => {
    const action = removePost(1);

    const endState = profileReducer(startState, action);

    expect(endState.posts.length).toBe(1);
    expect(endState.posts[0].name).toBe("Bruce Wayne");
})

test("No post should be removed", () => {
    const action = removePost(23);

    const endState = profileReducer(startState, action);

    expect(endState.posts.length).toBe(2);
})