import {CustomIcon, CustomSafeAreaView} from '@components/componentsIndex';
import {withPlayer} from '@components/playerIndex';
import {usePlayerStore} from '@services/usePlayerStore';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './home.style';
import color from '@theme/color';

const Home: FC = () => {
  const {allTracks} = usePlayerStore();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomIcon
          name="musical-note"
          iconFamily="Ionicons"
          size={20}
          color={color.primary}
        />
      </View>
      <Text>Home</Text>
    </CustomSafeAreaView>
  );
};

export default withPlayer(Home);
