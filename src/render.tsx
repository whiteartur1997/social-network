import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import './index.scss';
import { addPost, onNewPostMessageChange, StateType } from './redux/state';

export let rerenderEntireTree: (state: StateType) => void = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        onNewPostMessageChange={onNewPostMessageChange} />
    </BrowserRouter>, document.getElementById('root')
  );
}

