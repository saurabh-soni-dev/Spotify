import color from '@theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundDark,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: color.backgroundDark,
    paddingHorizontal: 24,
  },
  emailStyle: {
    marginTop: 30,
  },
  nextButton: {
    backgroundColor: color.gray,
    alignSelf: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  focusNextButton: {
    backgroundColor: color.white,
    alignSelf: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },
});
