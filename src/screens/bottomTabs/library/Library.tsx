import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {withPlayer} from '@components/playerIndex';

const Library: FC = () => {
  return (
    <View>
      <Text>Library</Text>
    </View>
  );
};

export default withPlayer(Library);
