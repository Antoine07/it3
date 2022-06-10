import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Home from './components/Home';
import rootReducer from './store/reducers/index';
import middlewareMemory from './store/middlewares/memory';

const store = createStore(rootReducer, applyMiddleware(middlewareMemory))

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
