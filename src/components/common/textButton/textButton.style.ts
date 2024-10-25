import color from '@theme/color';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  textButton: {
    width: '100%',
    backgroundColor: color.green500,
    height: hp('7%'),
    borderRadius: 50,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  outlinedButton: {
    width: '100%',
    backgroundColor: 'transparent',
    height: hp('7%'),
    borderRadius: 50,
    borderWidth: 0.4,
    borderColor: color.inactive,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  onlyTextButton: {
    width: '100%',
    backgroundColor: 'transparent',
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
