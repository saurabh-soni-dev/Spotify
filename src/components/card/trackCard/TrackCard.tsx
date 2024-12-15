import {CustomIcon, CustomText} from '@components/componentsIndex';
import {Track, usePlayerStore} from '@services/usePlayerStore';
import color from '@theme/color';
import {resetAndNavigate} from '@utility/navigationServices';
import React, {FC, memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import font from '@theme/font';
import useResponsiveDesign from '@hooks/useResponsiveDesign';
import {createStyles} from './trackCard.style';

interface TrackCardProps {
  item: Track;
  index: number;
  onNavigate?: boolean;
  onPress?: () => void;
}
const TrackCard: FC<TrackCardProps> = ({item, index, onNavigate, onPress}) => {
  const {hp, wp, fs, is} = useResponsiveDesign();
  const styles = createStyles(hp, wp, fs, is);
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
                  fontSize: fs(16),
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
                  color: isActive ? color.primary : color.white,
                  fontSize: fs(12),
                  fontFamily: font.satoshiMedium,
                  opacity: 0.8,
                  marginTop: hp(0.5),
                })
              }>
              {item?.artist?.name}
            </CustomText>
          </View>
        </View>
        <CustomIcon
          name="ellipsis-horizontal-sharp"
          iconFamily="Ionicons"
          size={is(6)}
          color={color.inactive}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(TrackCard);
