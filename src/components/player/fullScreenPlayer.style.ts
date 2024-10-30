import color from '@theme/color';
import font from '@theme/font';
import {screenHeight, screenWidth} from '@utility/functions/constant';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: color.black,
  },
  gradient: {
    height: screenHeight,
    width: screenWidth,
    zIndex: -3,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: Platform.OS === 'ios' ? 50 : 30,
  },
  albumContainer: {
    width: '100%',
    height: screenHeight * 0.52,
  },
  imageContainer: {
    position: 'absolute',
    width: screenWidth * 0.9,
    height: screenHeight * 0.42,
    overflow: 'hidden',
    borderRadius: 10,
    alignSelf: 'center',
    top: screenHeight * 0.17,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 16,
    fontFamily: font.satoshiBold,
    lineHeight: 22,
    color: color.white,
  },
  artistName: {
    fontSize: 12,
    fontFamily: font.satoshiMedium,
    color: color.white,
    opacity: 0.8,
  },
});
