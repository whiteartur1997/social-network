import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import state, { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree: () => void = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>, document.getElementById('root')
  );
}

