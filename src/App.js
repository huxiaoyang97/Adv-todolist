import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import GlobalStyle from './store/style';
import './mysass.scss'

function App() {
  return (
    <Provider store ={store}>
      <TodoList/>
      <GlobalStyle/>
    </Provider>
  );
}

export default App;
