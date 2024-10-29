import {CustomSafeAreaView, CustomStatusBar} from '@components/componentsIndex';
import {withPlayer} from '@components/playerIndex';
import {usePlayerStore} from '@services/usePlayerStore';
import React, {FC} from 'react';
import {Text} from 'react-native';

const Home: FC = () => {
  const {allTracks} = usePlayerStore();
  return (
    <CustomSafeAreaView>
      <Text>Home</Text>
    </CustomSafeAreaView>
  );
};

export default withPlayer(Home);
