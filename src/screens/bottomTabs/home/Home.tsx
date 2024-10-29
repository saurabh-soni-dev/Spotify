import { CustomSafeAreaView } from '@components/componentsIndex';
import { withPlayer } from '@components/playerIndex';
import React, { FC } from 'react';
import { Text } from 'react-native';

const Home: FC = () => {
  return (
    <CustomSafeAreaView>
      <Text>Home</Text>
    </CustomSafeAreaView>
  );
};

export default withPlayer(Home);
