import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './components/Home';
import rootReducer from './store/reducers/index';

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
