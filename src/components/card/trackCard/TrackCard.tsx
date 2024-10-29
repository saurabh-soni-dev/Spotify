import {CustomIcon, CustomText} from '@components/componentsIndex';
import {Track, usePlayerStore} from '@services/usePlayerStore';
import color from '@theme/color';
import {resetAndNavigate} from '@utility/navigationServices';
import React, {FC, memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './trackCard.style';
import {scale} from 'react-native-size-scaling';
import font from '@theme/font';

interface TrackCardProps {
  item: Track;
  index: number;
  onNavigate?: boolean;
  onPress?: () => void;
}
const TrackCard: FC<TrackCardProps> = ({item, index, onNavigate, onPress}) => {
  const {currentPlayingTrack, setCurrentPlayingTrack} = usePlayerStore();
  const togglePlayTrack = async () => {
    await setCurrentPlayingTrack(item);
  };
  const isActive = currentPlayingTrack?.id === item?.id;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => {
        togglePlayTrack();
        if (onNavigate) {
          resetAndNavigate('HomeBottomTab');
        }
      }}>
      <View style={styles.flexRowBetween}>
        <View style={styles.flexRow}>
          <Image source={item?.artwork_uri} style={styles.image} />
          <View style={styles.trackInfo}>
            <CustomText
              numberOfLines={1}
              textStyle={
                (styles.title,
                {
                  color: isActive ? color.primary : color.white,
                  fontSize: scale(16),
                  fontFamily: font.satoshiBold,
                })
              }>
              {item?.title}
            </CustomText>
            <CustomText
              numberOfLines={1}
              textStyle={
                (styles.artistName,
                {
                  color: isActive ? color.primary : color.inactive,
                  fontSize: scale(12),
                  fontFamily: font.satoshiRegular,
                })
              }>
              {item?.artist?.name}
            </CustomText>
          </View>
        </View>
        <CustomIcon
          name="ellipsis-horizontal-sharp"
          iconFamily="Ionicons"
          size={scale(20)}
          color={color.white}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(TrackCard);
