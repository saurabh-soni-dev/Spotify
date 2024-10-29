import {CustomText} from '@components/componentsIndex';
import React, {FC, memo, useEffect, useState} from 'react';
import {Dimensions, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface SlidingTextProps {
  text?: string;
  fontSize?: number;
  fontFamily?: string;
}

const SlidingText: FC<SlidingTextProps> = ({text, fontFamily, fontSize}) => {
  const [textWidth, setTextWidth] = useState<number>(0);
  const containerWidth = Dimensions.get('window').width - 130;

  const translateX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const handleTextLayout = (e: LayoutChangeEvent) => {
    const {width} = e?.nativeEvent?.layout;
    setTextWidth(width);
  };

  useEffect(() => {
    if (textWidth > containerWidth) {
      translateX.value = withRepeat(
        withTiming(-textWidth + 200, {
          duration: 6000,
          easing: Easing.linear,
        }),
        -1,
        true,
      );
    } else {
      translateX.value = 0;
    }
  }, [textWidth, text, containerWidth]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textContainer, animatedStyle]}>
        <CustomText
          textStyle={{fontFamily: fontFamily, fontSize: fontSize}}
          onLayout={handleTextLayout}>
          {text}
        </CustomText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    width: 600,
  },
});
export default memo(SlidingText);
