import {Dimensions, Platform} from 'react-native';
import {scale} from 'react-native-size-scaling';

export const BOTTOM_TAB_HEIGHT = Platform.OS == 'ios' ? scale(90) : scale(70);
export const screenWidth: number = Dimensions.get('window').width;
export const screenHeight: number = Dimensions.get('window').height;
export const MIN_PLAYER_HEIGHT = BOTTOM_TAB_HEIGHT + 60;
export const MAX_PLAYER_HEIGHT = screenHeight;

export const convertTrack = (track: any) => {
  return {
    id: track.id,
    url: track.track_uri,
    title: track.title,
    artist: track.artist.name,
    artwork: track.artwork_uri,
  };
};

export const darkenColor = (hex: string, amount = 100) => {
  let color = hex?.replace('#', '');
  if (color?.length === 3) {
    color = color
      ?.split('')
      ?.map(c => c + c)
      ?.join('');
  }
  const num = parseInt(color, 16);
  const r = Math.max((num >> 16) - amount, 0);
  const g = Math.max(((num >> 8) & 0x00ff) - amount, 0);
  const b = Math.max((num & 0x0000ff) - amount, 0);
  return `#${((r << 16) | (g << 8) | b)?.toString(16).padStart(6, '0')}`;
};
