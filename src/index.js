import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import RootNavigator from './navigation/index';

export default function Root() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
