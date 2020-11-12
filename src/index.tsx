import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store, { StateType } from './redux/state';
import * as serviceWorker from './serviceWorker';


export let rerenderEntireTree: (state: StateType) => void = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        store={store}
      />
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree(store.getState()); // изначально отрисовываем приложение

// делаем так, что локальная rerenderEntireTree в state.ts
// получет "настоящую rerenderEntireTree"
store.subscribe(rerenderEntireTree);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
