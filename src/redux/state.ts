export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

export type ProfilePageType = {
  posts: Array<PostType>
}

export type DialogsPageType = {
  dialogs: Array<DialogItemType>
  messages: Array<MessageItemType>
}

export type SidebarType = {
  friends: Array<SidebarFriendType>
}

export type PostType = {
  id: number
  avatar: string
  name: string
  message: string
  likeCount: number
  time: string
};

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

export type SidebarFriendType = {
  id: number
  name: string
  status: string
  avatar: string
}

let state: StateType = {
  profilePage: {
    posts: [
      { id: 1, avatar: require('./../img/einstein.png'), name: 'Albert Einstein', message: 'Hi, how are you?', likeCount: 2, time: "11:32 AM" },
      { id: 2, avatar: require('./../img/batman.png'), name: 'Bruce Wayne', message: 'My first steps in react!', likeCount: 24, time: "09:32 AM" },
    ],
  },
  dialogsPage: {
    dialogs: [
      { name: "Albert Einstein", id: 1, preview: "Anyone who has never made a mistake has never tried anything new", time: "8:23 AM", avatar: require("./../img/einstein.png") },
      { name: "Kurt Cobain", id: 2, preview: "When the lights out it's less dangerous", time: "8:43 AM", avatar: require("./../img/kurtCobain.png") },
      { name: "Steve Jobs", id: 3, preview: "It’s really clear that the most precious resource we all have is time", time: "9:23 AM", avatar: require("./../img/steveJobs.png") },
      { name: "Luis Suarez", id: 4, preview: "Bite bite", time: "7:23 PM", avatar: require("./../img/suarez.png") },
    ],
    messages: [
      { id: 1, name: "Bruce Wayne", description: "Yo bro. Let's rescue this world", time: "13:33 PM", fromMe: true, avatar: require('./../img/batman.png') },
      { id: 2, name: "Albert Einstein", description: "Yeah man. Come on", time: "12:33 PM", fromMe: false, avatar: require('./../img/einstein.png') },
    ]
  },
  sidebar: {
    friends: [
      { id: 1, name: "Doctor Who", status: "online", avatar: require('./../img/doctorWho.png') },
      { id: 2, name: "Hakim Al Asad", status: "offline", avatar: require('./../img/hakimAlAsad.png') },
      { id: 3, name: "John Doe", status: "offline", avatar: require('./../img/johnDoe.png') },
      { id: 4, name: "Keanu Reeves", status: "online", avatar: require('./../img/keanuReeves.png') },
      { id: 5, name: "Mark Twain", status: "online", avatar: require('./../img/markTwain.png') },
      { id: 6, name: "Nelson Mandela", status: "online", avatar: require('./../img/nelsonMandela.png') },
      { id: 7, name: "Margo Robby", status: "offline", avatar: require('./../img/margoRobby.png') },
      { id: 8, name: "Disco Girl", status: "online", avatar: require('./../img/discoGirl.png') },
      { id: 9, name: "Ms Fitcher", status: "online", avatar: require('./../img/msFitcher.png') },
    ]
  }
}

export default state;