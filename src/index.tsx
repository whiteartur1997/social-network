import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from "./App";

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

let postsData: Array<PostType> = [
  { id: 1, avatar: require('./img/einstein.png'), name: 'Albert Einstein', message: 'Hi, how are you?', likeCount: 2, time: "11:32 AM" },
  { id: 2, avatar: require('./img/batman.png'), name: 'Bruce Wayne', message: 'My first steps in react!', likeCount: 24, time: "09:32 AM" },
];

let dialogsData: Array<DialogItemType> = [
  { name: "Albert Einstein", id: 1, preview: "Anyone who has never made a mistake has never tried anything new", time: "8:23 AM", avatar: require("./img/einstein.png") },
  { name: "Kurt Cobain", id: 2, preview: "When the lights out it's less dangerous", time: "8:43 AM", avatar: require("./img/kurtCobain.png") },
  { name: "Steve Jobs", id: 3, preview: "It’s really clear that the most precious resource we all have is time", time: "9:23 AM", avatar: require("./img/steveJobs.png") },
  { name: "Luis Suarez", id: 4, preview: "Bite bite", time: "7:23 PM", avatar: require("./img/suarez.png") },
];

let messagesData: Array<MessageItemType> = [
  { id: 1, name: "Bruce Wayne", description: "Yo bro. Let's rescue this world", time: "13:33 PM", fromMe: true, avatar: require('./img/batman.png') },
  { id: 2, name: "Albert Einstein", description: "Yeah man. Come on", time: "12:33 PM", fromMe: false, avatar: require('./img/einstein.png') },
]

ReactDOM.render(
  <App
    posts={postsData}
    messages={messagesData}
    dialogs={dialogsData}
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
