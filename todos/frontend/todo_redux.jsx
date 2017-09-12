import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';


class Todos extends React.Component {
  render() {
    return (
      <h1>Todos App</h1>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootElement = document.getElementById('content');

  // ReactDOM.render(<Todos store = { store }/>, rootElement);
  ReactDOM.render(<Root store = { store } />, rootElement);


  window.store = store; // DELETE ME LATER
});
