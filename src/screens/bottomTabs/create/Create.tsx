import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {withPlayer} from '@components/playerIndex';

const Create: FC = () => {
  return (
    <View>
      <Text>Create</Text>
    </View>
  );
};

export default withPlayer(Create);
