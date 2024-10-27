import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  leftIconView: {
    height: 32,
    width: 32,
    backgroundColor: color.black,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleStyle: {
    flex: 0.9,
    textAlign: 'center',
    fontFamily: font.satoshiBlack,
    fontSize: 17,
  },
});
