import color from '@theme/color';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    overflow: 'hidden',
    width: '100%',
  },
  image: {
    borderRadius: scale(5),
    width: scale(45),
    height: scale(45),
    resizeMode: 'cover',
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  progressContainer: {
    height: 2,
    width: '100%',
    marginTop: 3,
  },
  progressBackground: {
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  progressBar: {
    height: 3,
    backgroundColor: color.white,
  },
});
