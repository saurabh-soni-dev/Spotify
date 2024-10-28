import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(50),
    paddingHorizontal: scale(24),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(15),
  },
  leftIconView: {
    height: scale(32),
    width: scale(32),
    backgroundColor: color.black,
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleStyle: {
    flex: 0.9,
    textAlign: 'center',
    fontFamily: font.satoshiBlack,
    fontSize: scale(22),
  },
});
