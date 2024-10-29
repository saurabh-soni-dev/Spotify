import React, {FC} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Route from './src/navigation';

const App: FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Route />
    </GestureHandlerRootView>
  );
};

export default App;
