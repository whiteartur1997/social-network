import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';


export let rerenderEntireTree: () => void = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        store={store}
      />
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree(); // изначально отрисовываем приложение

// делаем так, что локальная rerenderEntireTree в store.ts
// получет "настоящую rerenderEntireTree"
store.subscribe(rerenderEntireTree);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
