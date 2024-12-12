/* eslint-disable no-unused-vars */
import { View, Text } from 'react-native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/redux/store/store';
import Counter from './src/Components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
};

export default App;
