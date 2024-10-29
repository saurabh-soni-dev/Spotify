import {CustomIcon, CustomText, SlidingText} from '@components/componentsIndex';
import {useSharedState} from '@navigation/bottomTabs/SharedContext';
import {usePlayerStore} from '@services/usePlayerStore';
import color from '@theme/color';
import {darkenColor} from '@utility/functions/constant';
import React, {FC, useEffect, useState} from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';
import {usePlaybackState, useProgress} from 'react-native-track-player';
import {styles} from './airPlayer.style';

const AirPlayer: FC = () => {
  const [colors, setColors] = useState([
    color.backgroundLight,
    color.buttonHover,
  ]);
  const progress = useProgress();
  const {expandPlayer} = useSharedState();

  const {state} = usePlaybackState();
  const isPlaying = state == 'playing';

  const {play, pause, currentPlayingTrack} = usePlayerStore();
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

  const calculateProgressWidth: any = () => {
    if (progress?.duration > 0) {
      const percentage = (progress?.position / progress?.duration) * 100;
      return `${percentage}%`;
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <LinearGradient colors={colors} style={styles.container}>
      <View style={styles.flexRowBetween}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={expandPlayer}
          style={styles.flexRow}>
          <Image
            source={currentPlayingTrack?.artwork_uri}
            style={styles.image}
          />
          <View style={{width: '70%'}}>
            <SlidingText
              text={currentPlayingTrack?.title}
              style={styles.titleText}
            />
            <CustomText textStyle={styles.artistName}>
              {currentPlayingTrack?.artist?.name}
            </CustomText>
          </View>
        </TouchableOpacity>
        <View style={styles.controlView}>
          <TouchableOpacity activeOpacity={1} style={styles.iconView}>
            <CustomIcon
              name="broadcast-on-home"
              iconFamily="MaterialIcons"
              size={30}
              color={color.inactive}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={styles.iconView}>
            <CustomIcon
              name="add-circle-outline"
              iconFamily="MaterialIcons"
              size={30}
              color={color.inactive}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={togglePlayback}
            style={styles.iconView}>
            <CustomIcon
              name={isPlaying ? 'pause' : 'play-arrow'}
              iconFamily="MaterialIcons"
              size={35}
              color={color.white}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <View
            style={[styles.progressBar, {width: calculateProgressWidth()}]}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default AirPlayer;
