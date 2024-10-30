import {screenHeight, screenWidth} from '@utility/functions/constant';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

interface VideoPlayerProps {
  videoURI: any;
}
const VideoPlayer: FC<VideoPlayerProps> = ({videoURI}) => {
  return (
    <View>
      <Video
        source={videoURI}
        ignoreSilentSwitch="ignore"
        playWhenInactive={false}
        playInBackground={false}
        controls={false}
        disableFocus={true}
        muted
        style={styles.container}
        repeat
        hideShutterView
        resizeMode="cover"
        shutterColor={'transparent'}
      />
      <LinearGradient
        colors={[
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0.1)',
          'rgba(0,0,0,0.2)',
          'rgba(0,0,0,0.3)',
          'rgba(0,0,0,0.4)',
          'rgba(0,0,0,0.7)',
          'rgba(0,0,0,0.8)',
          'rgba(0,0,0,0.9)',
          'rgba(0,0,0,1)',
        ]}
        style={styles.gradient}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    aspectRatio: 9 / 16,
    width: screenWidth,
    position: 'absolute',
    zIndex: -2,
  },
  gradient: {
    height: screenHeight,
    width: screenWidth,
    zIndex: -1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  },
});
