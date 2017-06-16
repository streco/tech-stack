import React from 'react';
import { AppRegistry, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/common/Header';
import LibraryList from './components/LibraryList';

import reducers from './reducers';

const App = () => {
  return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
  );
};

AppRegistry.registerComponent('tech_stack', () => App);
