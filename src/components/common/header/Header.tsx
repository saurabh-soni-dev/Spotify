import {CustomText} from '@components/componentsIndex';
import SvgIndex from '@svgIndex';
import React, {FC, memo, useCallback, useMemo} from 'react';
import {TextStyle, TouchableOpacity, View} from 'react-native';
import {styles} from './header.style';
import {useAuthNavigation} from '@hooks/useAppNavigation';

interface HeaderProps {
  title?: string;
  titleStyle?: TextStyle;
  leftIcon?: React.JSX.ElementType;
}

const Header: FC<HeaderProps> = ({
  title,
  titleStyle,
  leftIcon = SvgIndex.leftIcon,
}) => {
  const navigation = useAuthNavigation();
  const LeftIcon = useMemo(() => leftIcon as React.JSX.ElementType, [leftIcon]);
  const titleStyles = {...titleStyle, ...styles.headerTitleStyle};

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [leftIcon]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressBack}
        style={styles.leftIconView}>
        {leftIcon && <LeftIcon />}
      </TouchableOpacity>
      <CustomText textStyle={titleStyles}>{title}</CustomText>
    </View>
  );
};

export default memo(Header);
