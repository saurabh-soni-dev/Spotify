import color from '@theme/color';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  expandedPlayer: {
    alignItems: 'center',
    backgroundColor: '#444',
  },
  playerContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: color.transparent,
  },
  collapsedPlayer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
