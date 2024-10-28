import {Platform} from 'react-native';
import {scale} from 'react-native-size-scaling';
export const BOTTOM_TAB_HEIGHT = Platform.OS == 'ios' ? scale(90) : scale(70);
