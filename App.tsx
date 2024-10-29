import React, { FC, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Route from './src/navigation';
import { LogBox, Platform } from 'react-native';
import TrackPlayer from 'react-native-track-player';

LogBox.ignoreAllLogs();
const App: FC = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      TrackPlayer.setupPlayer();
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Route />
    </GestureHandlerRootView>
  );
};

export default App;
