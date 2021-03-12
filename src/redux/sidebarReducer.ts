import {ActionsTypes} from "./redux-store";

export type SidebarType = {
  friends: Array<SidebarFriendType>
}

export type SidebarFriendType = {
  id: number
  name: string
  status: string
  avatar: string
}

const initalState: SidebarType = {
  friends: [
    { id: 1, name: "Doctor Who", status: "online", avatar: require('./../assets/img/doctorWho.png') },
    { id: 2, name: "Hakim Al Asad", status: "offline", avatar: require('./../assets/img/hakimAlAsad.png') },
    { id: 3, name: "John Doe", status: "offline", avatar: require('./../assets/img/johnDoe.png') },
    { id: 4, name: "Keanu Reeves", status: "online", avatar: require('./../assets/img/keanuReeves.png') },
    { id: 5, name: "Mark Twain", status: "online", avatar: require('./../assets/img/markTwain.png') },
    { id: 6, name: "Nelson Mandela", status: "online", avatar: require('./../assets/img/nelsonMandela.png') },
    { id: 7, name: "Margo Robby", status: "offline", avatar: require('./../assets/img/margoRobby.png') },
    { id: 8, name: "Disco Girl", status: "online", avatar: require('./../assets/img/discoGirl.png') },
    { id: 9, name: "Ms Fitcher", status: "online", avatar: require('./../assets/img/msFitcher.png') },
  ]
};

const sidebarReducer = (state: SidebarType = initalState, action: ActionsTypes) => {
  switch (action.type) {
    default: return state;
  }
}

export default sidebarReducer
