import {DialogsPageType, MessageItemType} from "../redux/store";
import dialogsReducer from "../redux/dialogsReducer";
import usersReducer, {UsersPageType, UserType} from "../redux/usersReducer";

let initialState: UsersPageType;

beforeEach(() => {
    initialState = {
        users: [
            {
                id: 1,
                name: "Archi",
                followed: true,
                uniqueUrlName: "",
                status: "Front end dev",
                photos: {
                    small: null,
                    large: null
                }
            },
            {
                id: 2,
                name: "Dana",
                followed: true,
                uniqueUrlName: "",
                status: "Raccoon",
                photos: {
                    small: null,
                    large: null
                }
            },
            {
                id: 3,
                name: "Bobby",
                followed: false,
                uniqueUrlName: "",
                status: "Puss in boots",
                photos: {
                    small: null,
                    large: null
                }
            }
        ]
    }
})

test("Bobby should be followed", () => {
    const newState = usersReducer(initialState, {type: "FOLLOW", id: 3});

    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[0].followed).toBeTruthy();
    expect(newState.users[1].followed).toBeTruthy();
});

test("Archi should be unfollowed ", () => {
    const newState = usersReducer(initialState, {type: "UNFOLLOW", id: 1});

    expect(newState.users[2].followed).toBeFalsy();
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});

test("users should be added", () => {
    const addedUsers: UserType[] = [
        {
            id: 4,
            name: "Andrew",
            followed: false,
            uniqueUrlName: "",
            status: "Yoyo",
            photos: {
                small: null,
                large: null
            }
        },
        {
            id: 5,
            name: "Kyryl",
            followed: true,
            uniqueUrlName: "",
            status: "Molly",
            photos: {
                small: null,
                large: null
            }
        },
    ]
    const newState = usersReducer(initialState, {type: "SET-USERS", users: addedUsers});

    expect(newState.users.length).toBe(5);
    expect(newState.users[2].name).toBe("Bobby");
    expect(newState.users[3].name).toBe("Andrew");
    expect(newState.users[4].followed).toBeTruthy();
});