import {TrackCard} from '@components/cardIndex';
import {CustomSafeAreaView, CustomText} from '@components/componentsIndex';
import {withPlayer} from '@components/playerIndex';
import {usePlayerStore} from '@services/usePlayerStore';
import React, {FC} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {styles} from './home.style';
import {scale} from 'react-native-size-scaling';
import color from '@theme/color';
import font from '@theme/font';

const Home: FC = () => {
  const {allTracks} = usePlayerStore();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={allTracks}
          keyExtractor={(_, index) => {
            return `${index}`;
          }}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => (
            <TrackCard item={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default withPlayer(Home);
