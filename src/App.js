/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';


//Redux
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

//Pages
import { LoginPage } from './pages/LoginPage';

console.disableYellowBox = true;

const AppStack = createStackNavigator({ Login: LoginPage });

const AppContainer = createAppContainer(AppStack);


class App extends Component<{}> {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App;