import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import { Provider } from 'react-redux';
import store from './store/store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
