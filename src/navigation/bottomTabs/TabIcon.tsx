import {CustomText} from '@components/componentsIndex';
import imageIndex from '@imageIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {Image, ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import {scale} from 'react-native-size-scaling';

interface TabProps {
  name?: string;
}
interface IconProps {
  focused: boolean;
}

const styles: ImageStyle = {
  width: scale(20),
  height: scale(20),
};

const tabStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const taxtStylesInActive: TextStyle = {
  textAlign: 'center',
  marginTop: scale(5),
  color: color.inactive,
  fontSize: scale(14),
};
const taxtStylesActive: TextStyle = {
  textAlign: 'center',
  marginTop: scale(5),
  color: color.white,
  fontSize: scale(14),
};

const TabIcon: FC<TabProps> = ({name}) => {
  return (
    <View style={tabStyles}>
      <Image
        source={
          name == 'Home'
            ? imageIndex.home
            : name == 'Search'
            ? imageIndex.search
            : name == 'Library'
            ? imageIndex.library
            : name == 'Premium'
            ? imageIndex.appLogoWhite
            : imageIndex.plus
        }
        style={styles}
        tintColor={color.inactive}
      />
      <CustomText textStyle={taxtStylesInActive}>{name}</CustomText>
    </View>
  );
};

const TabIconFocused: FC<TabProps> = ({name}) => {
  return (
    <View style={tabStyles}>
      <Image
        source={
          name == 'Home'
            ? imageIndex.homeFocused
            : name == 'Search'
            ? imageIndex.searchFocused
            : name == 'Library'
            ? imageIndex.libraryFocused
            : name == 'Premium'
            ? imageIndex.appLogo
            : imageIndex.plus
        }
        tintColor={color.white}
        style={styles}
      />
      <CustomText textStyle={taxtStylesActive}>{name}</CustomText>
    </View>
  );
};

const HomeTabIcon: FC<IconProps> = ({focused}) => {
  return focused ? <TabIconFocused name="Home" /> : <TabIcon name="Home" />;
};
const SearchTabIcon: FC<IconProps> = ({focused}) => {
  return focused ? <TabIconFocused name="Search" /> : <TabIcon name="Search" />;
};
const LibraryTabIcon: FC<IconProps> = ({focused}) => {
  return focused ? (
    <TabIconFocused name="Library" />
  ) : (
    <TabIcon name="Library" />
  );
};

const PremiumTabIcon: FC<IconProps> = ({focused}) => {
  return focused ? (
    <TabIconFocused name="Premium" />
  ) : (
    <TabIcon name="Premium" />
  );
};

const CreateTabIcon: FC<IconProps> = ({focused}) => {
  return focused ? <TabIconFocused name="Create" /> : <TabIcon name="Create" />;
};

export {
  CreateTabIcon,
  HomeTabIcon,
  LibraryTabIcon,
  PremiumTabIcon,
  SearchTabIcon,
};
