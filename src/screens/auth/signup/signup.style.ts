import color from '@theme/color';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundDark,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: color.backgroundDark,
    paddingHorizontal: scale(24),
  },
  emailStyle: {
    marginTop: scale(30),
  },
  nextButton: {
    backgroundColor: color.gray,
    alignSelf: 'center',
    paddingHorizontal: scale(40),
    marginTop: scale(20),
  },
  focusNextButton: {
    backgroundColor: color.white,
    alignSelf: 'center',
    paddingHorizontal: scale(40),
    marginTop: scale(20),
  },
});
