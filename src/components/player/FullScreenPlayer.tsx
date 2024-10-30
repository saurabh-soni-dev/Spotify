import {CustomIcon, CustomText, SlidingText} from '@components/componentsIndex';
import {useSharedState} from '@navigation/bottomTabs/SharedContext';
import {usePlayerStore} from '@services/usePlayerStore';
import color from '@theme/color';
import {darkenColor} from '@utility/functions/constant';
import React, {FC, useEffect, useState} from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';
import {useProgress} from 'react-native-track-player';
import {styles} from './fullScreenPlayer.style';
import VideoPlayer from './VideoPlayer';
import ControlsAndDetails from './ControlsAndDetails';

const FullScreenPlayer: FC = () => {
  const [colors, setColors] = useState([
    color.backgroundLight,
    color.buttonHover,
  ]);
  const progress = useProgress();
  const {collapsePlayer} = useSharedState();

  const {currentPlayingTrack} = usePlayerStore();

  useEffect(() => {
    const url = currentPlayingTrack?.artwork_uri;
    ImageColors.getColors(url, {
      fallback: color.backgroundDark,
      cache: true,
      key: url,
    }).then((c: any) => {
      const color = Platform.OS === 'ios' ? c.secondary : c.vibrant;
      const darknedSecondary = darkenColor(color);
      setColors([darknedSecondary, darknedSecondary]);
    });
  }, [currentPlayingTrack]);

  return (
    <View style={styles.container}>
      {currentPlayingTrack?.video_uri ? (
        <VideoPlayer videoURI={currentPlayingTrack?.video_uri} />
      ) : (
        <View style={styles.imageContainer}>
          <Image
            source={currentPlayingTrack?.artwork_uri}
            style={styles.image}
          />
        </View>
      )}
      <LinearGradient
        colors={[...colors, 'rgba(0,0,0,0.9)']}
        style={styles.gradient}
      />
      <View style={styles.flexRowBetween}>
        <TouchableOpacity onPress={collapsePlayer}>
          <CustomIcon
            name="chevron-down-sharp"
            iconFamily="Ionicons"
            size={25}
            color={color.white}
          />
        </TouchableOpacity>
        <View style={{width: '70%'}}>
          <SlidingText
            text={currentPlayingTrack?.title}
            style={styles.titleText}
          />
          <CustomText textStyle={styles.artistName}>
            {currentPlayingTrack?.artist?.name}
          </CustomText>
        </View>
        <TouchableOpacity>
          <CustomIcon
            name="ellipsis-vertical-sharp"
            iconFamily="Ionicons"
            size={25}
            color={color.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.albumContainer} />
      <ControlsAndDetails />
    </View>
  );
};

export default FullScreenPlayer;
