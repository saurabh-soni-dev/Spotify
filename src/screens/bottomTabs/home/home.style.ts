import {StyleSheet} from 'react-native';

export const createStyles = (hp: (percentage: number) => number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainerStyle: {
      marginTop: hp(1),
    },
  });
};
