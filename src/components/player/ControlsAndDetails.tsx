import {
  CustomIcon,
  CustomText,
  ScalePress,
  SlidingText,
} from '@components/componentsIndex';
import {useSharedState} from '@navigation/bottomTabs/SharedContext';
import Slider from '@react-native-community/slider';
import {usePlayerStore} from '@services/usePlayerStore';
import color from '@theme/color';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import PackageIcon from 'react-native-vector-icons/MaterialIcons';

const ControlsAndDetails: FC = () => {
  const [colors, setColors] = useState([
    color.backgroundLight,
    color.buttonHover,
  ]);
  const [icon, setIcon] = useState();
  const progress = useProgress();
  const {expandPlayer} = useSharedState();

  const {state} = usePlaybackState();
  const isPlaying = state == 'playing';

  const {
    play,
    pause,
    currentPlayingTrack,
    toggleRepeat,
    toggleSuffle,
    previous,
    next,
    isRepeating,
  } = usePlayerStore();

  const togglePlayback = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleSeek = async (v: any) => {
    await TrackPlayer.seekTo(v * progress?.duration);
  };

  useEffect(() => {
    PackageIcon.getImageSource('circle', 12, 'white').then(setIcon);
  }, []);

  const formatTime = (seconds: any) => {
    const min = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${min}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleLooping = async () => {
    if (isRepeating) {
      toggleSuffle();
    } else {
      toggleRepeat();
    }
  };

  return (
    <View style={styles.container}>
      <SlidingText text={currentPlayingTrack?.title} />
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={progress?.position / progress?.duration || 0}
        tapToSeek
        onSlidingComplete={handleSeek}
        thumbImage={icon}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="rgba(255,255,255,0.2)"
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <CustomText>{formatTime(progress?.position)}</CustomText>
        <CustomText>
          {formatTime(progress?.duration - progress?.position)}
        </CustomText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <ScalePress onPress={handleLooping}>
          <CustomIcon
            name={isRepeating ? 'repeat' : 'shuffle'}
            iconFamily="Ionicons"
            size={22}
            color={color.primary}
          />
        </ScalePress>
        <ScalePress onPress={previous}>
          <CustomIcon
            name="play-skip-back-sharp"
            iconFamily="Ionicons"
            size={26}
          />
        </ScalePress>
        <ScalePress onPress={togglePlayback}>
          <CustomIcon
            name={isPlaying ? 'pause-circle-sharp' : 'play-circle-sharp'}
            iconFamily="Ionicons"
            size={50}
          />
        </ScalePress>
        <ScalePress onPress={next}>
          <CustomIcon
            name={'play-skip-forward-sharp'}
            iconFamily="Ionicons"
            size={26}
          />
        </ScalePress>
        <ScalePress>
          <CustomIcon
            name={'alarm'}
            iconFamily="MaterialCommunityIcons"
            size={26}
          />
        </ScalePress>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    zIndex: 88,
  },
});

export default ControlsAndDetails;
