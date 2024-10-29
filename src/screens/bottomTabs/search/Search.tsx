import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {withPlayer} from '@components/playerIndex';

const Search: FC = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default withPlayer(Search);
