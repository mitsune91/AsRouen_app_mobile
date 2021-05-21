import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import RootNavigator from './navigation';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default Root;
