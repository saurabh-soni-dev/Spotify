import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {withPlayer} from '@components/playerIndex';

const Premium: FC = () => {
  return (
    <View>
      <Text>Premium</Text>
    </View>
  );
};

export default withPlayer(Premium);
