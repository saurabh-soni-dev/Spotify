import {Dimensions, Platform} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const BOTTOM_TAB_HEIGHT = Platform.OS == 'ios' ? scale(90) : scale(70);
export const screenWidth: number = Dimensions.get('window').width;
export const screenHeight: number = Dimensions.get('window').height;
export const MIN_PLAYER_HEIGHT = BOTTOM_TAB_HEIGHT + 60;
export const MAX_PLAYER_HEIGHT = screenHeight;
