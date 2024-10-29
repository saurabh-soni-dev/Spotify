import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { withPlayer } from '@components/playerIndex';

const Home: FC = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default withPlayer(Home);
