import {ScalePress} from '@components/componentsIndex';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import color from '@theme/color';
import {BOTTOM_TAB_HEIGHT} from '@utility/functions/constant';
import React, {FC} from 'react';
import {Platform, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-scaling';
import {
  CreateTabIcon,
  HomeTabIcon,
  LibraryTabIcon,
  PremiumTabIcon,
  SearchTabIcon,
} from './TabIcon';
import {useSharedState} from './SharedContext';

const HomeBottomTabBar: FC<BottomTabBarProps> = props => {
  const {state, navigation} = props;
  const {routes} = state;
  const safeAreaInsets = useSafeAreaInsets();

  const {translationY} = useSharedState();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -translationY.value}],
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyle,
        {paddingBottom: safeAreaInsets.bottom},
      ]}>
      {routes.map((route, index) => {
        const isFocused = state.index == index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route?.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event?.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route?.key,
          });
        };

        return (
          <ScalePress
            key={index}
            style={styles.tabItem}
            onPress={onPress}
            onLongPress={onLongPress}>
            {route?.name == 'Home' && <HomeTabIcon focused={isFocused} />}
            {route?.name == 'Search' && <SearchTabIcon focused={isFocused} />}
            {route?.name == 'Library' && <LibraryTabIcon focused={isFocused} />}
            {route?.name == 'Premium' && <PremiumTabIcon focused={isFocused} />}
            {route?.name == 'Create' && <CreateTabIcon focused={isFocused} />}
          </ScalePress>
        );
      })}
    </Animated.View>
  );
};

export default HomeBottomTabBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: color.backgroundDark,
    position: 'absolute',
    height: BOTTOM_TAB_HEIGHT,
    bottom: 0,
    zIndex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Platform.OS == 'ios' ? 10 : 2,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
