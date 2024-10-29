import {useSharedState} from '@navigation/bottomTabs/SharedContext';
import {
  MAX_PLAYER_HEIGHT,
  MIN_PLAYER_HEIGHT,
} from '@utility/functions/constant';
import React, {ComponentType, FC, memo, useEffect, useRef} from 'react';
import {Platform, ScrollView, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import AirPlayer from './AirPlayer';
import FullScreenPlayer from './FullScreenPlayer';
import {styles} from './player.style';
import {usePlayerStore} from '@services/usePlayerStore';

const withPlayer = <P extends object>(
  WrappedComponent: ComponentType<P>,
): FC<P> => {
  const WithPlayer: FC<P> = props => {
    const {translationY} = useSharedState();
    const isExtended = useSharedValue(false);
    const isScroll = useSharedValue(false);
    const {currentPlayingTrack} = usePlayerStore();
    const scrollRef = useRef<Animated.ScrollView>(null);

    useEffect(() => {
      translationY.value = withTiming(0, {duration: 0});
    }, [translationY]);

    const onScroll = useAnimatedScrollHandler({
      onBeginDrag({contentOffset}) {
        if (contentOffset.y === 0) {
          isScroll.value = false;
        }
      },
      onEndDrag({contentOffset}) {
        if (contentOffset.y === 0) {
          isScroll.value = false;
        }
      },
      onMomentumEnd({contentOffset}) {
        if (contentOffset.y === 0) {
          isScroll.value = false;
        }
      },
    });

    const panGesture = Gesture.Pan()
      .onChange(() => {
        if (translationY.value <= -602) {
          isScroll.value = true;
        }
      })
      .onUpdate(event => {
        translationY.value = Math.max(
          Math.min(
            event.translationY +
              (isExtended.value ? -MAX_PLAYER_HEIGHT + MIN_PLAYER_HEIGHT : 0),
            0,
          ),
          -MAX_PLAYER_HEIGHT + MIN_PLAYER_HEIGHT,
        );
      })
      .onEnd(event => {
        if (event.translationY < -MIN_PLAYER_HEIGHT / 2) {
          isExtended.value = true;
          translationY.value = withTiming(
            -MAX_PLAYER_HEIGHT + MIN_PLAYER_HEIGHT,
            {duration: 300},
          );
        } else {
          isExtended.value = false;
          translationY.value = withTiming(0, {duration: 300});
        }
      })
      .enabled(!isScroll.value);

    const animatedContainerStyle = useAnimatedStyle(() => {
      const height = interpolate(
        translationY.value,
        [-MAX_PLAYER_HEIGHT + MIN_PLAYER_HEIGHT, 0],
        [MAX_PLAYER_HEIGHT, MIN_PLAYER_HEIGHT],
        'clamp',
      );
      return {
        height,
        borderTopLeftRadius: translationY.value < -2 ? 15 : 0,
        borderTopRightRadius: translationY.value < -2 ? 15 : 0,
      };
    });

    const collapsedOpacityStyle = useAnimatedStyle(() => {
      const opacity = interpolate(translationY.value, [-2, 0], [0, 1], 'clamp');
      return {
        opacity,
        display: translationY.value < -2 ? 'none' : 'flex',
      };
    });

    const expandedOpacityStyle = useAnimatedStyle(() => {
      const opacity = interpolate(translationY.value, [-2, 0], [1, 0], 'clamp');
      return {
        opacity,
        display: translationY.value > -2 ? 'none' : 'flex',
      };
    });

    const combinedGesture = Gesture.Simultaneous(panGesture, Gesture.Native());

    return (
      <View style={styles.container}>
        <WrappedComponent {...props} />
        {currentPlayingTrack && (
          <GestureDetector gesture={combinedGesture}>
            <Animated.View
              style={[styles.playerContainer, animatedContainerStyle]}>
              {Platform.OS === 'ios' ? (
                <Animated.ScrollView
                  persistentScrollbar
                  ref={scrollRef}
                  pinchGestureEnabled
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  scrollEventThrottle={1}
                  onScroll={onScroll}
                  contentContainerStyle={styles.expandedPlayer}
                  style={expandedOpacityStyle}>
                  <FullScreenPlayer />
                </Animated.ScrollView>
              ) : (
                <Animated.View style={expandedOpacityStyle}>
                  <ScrollView
                    persistentScrollbar
                    pinchGestureEnabled
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled
                    contentContainerStyle={styles.expandedPlayer}>
                    <FullScreenPlayer />
                  </ScrollView>
                </Animated.View>
              )}

              <Animated.View
                style={[styles.collapsedPlayer, collapsedOpacityStyle]}>
                <AirPlayer />
              </Animated.View>
            </Animated.View>
          </GestureDetector>
        )}
      </View>
    );
  };
  return memo(WithPlayer);
};

export default withPlayer;
