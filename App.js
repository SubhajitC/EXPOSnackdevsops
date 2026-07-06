import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import UserListScreen from './src/screens/UserListScreen';

export default function App() {
  return (
    <Provider store={store}>
      <UserListScreen />
    </Provider>
  );
}