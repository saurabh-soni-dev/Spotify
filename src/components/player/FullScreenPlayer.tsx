import {View, Text} from 'react-native';
import React, {FC} from 'react';
import color from '@theme/color';
import {screenHeight, screenWidth} from '@utility/functions/constant';

const FullScreenPlayer: FC = () => {
  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
        backgroundColor: color.primary,
      }}>
      <Text>FullScreenPlayer</Text>
    </View>
  );
};

export default FullScreenPlayer;
