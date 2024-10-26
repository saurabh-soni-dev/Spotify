import {
  CustomStatusBar,
  CustomText,
  TextButton,
} from '@components/componentsIndex';
import imageIndex from '@imageIndex';
import svgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC} from 'react';
import {Image, Platform, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './splash.style';
import useSplash from './useSplash';

const Splash: FC = () => {
  const {navigateToScreen} = useSplash();
  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor={color.backgroundDark} />
      <LinearGradient
        start={{x: 0.0, y: -2}}
        end={{x: 0.0, y: 0.5}}
        colors={[color.inactive, color.gray, color.backgroundDark]}
        style={styles.linearGradient}>
        <View style={styles.logoView}>
          <Image
            source={imageIndex.appLogo}
            resizeMode="contain"
            style={styles.logo}
            tintColor={color.white}
          />
          <CustomText textStyle={styles.sloganText}>
            Millions of songs.{'\n'}Free on Spotify.
          </CustomText>
        </View>
        <View style={styles.buttonView}>
          <TextButton
            type="textButton"
            label="Sign up for free"
            labelStyle={styles.signupText}
            onPress={() => navigateToScreen(1)}
            underlayColor={color.buttonHover}
          />
          {Platform.OS === 'ios' ? (
            <TextButton
              type="outlinedButton"
              label="Continue with Apple"
              labelStyle={styles.loginText}
              onPress={() => navigateToScreen(2)}
              underlayColor={color.gray}
              leftIcon={svgIndex.apple}
            />
          ) : (
            <TextButton
              type="outlinedButton"
              label="Continue with phone number"
              labelStyle={styles.loginText}
              onPress={() => navigateToScreen(3)}
              underlayColor={color.gray}
            />
          )}
          <TextButton
            type="outlinedButton"
            label="Continue with Google"
            labelStyle={styles.loginText}
            onPress={() => navigateToScreen(4)}
            underlayColor={color.gray}
            leftIcon={svgIndex.google}
          />
          <TextButton
            type="outlinedButton"
            label="Continue with Facebook"
            labelStyle={styles.loginText}
            onPress={() => navigateToScreen(5)}
            underlayColor={color.gray}
            leftIcon={svgIndex.facebook}
          />
          <TextButton
            type="onlyText"
            label="Log in"
            labelStyle={styles.loginText}
            onPress={() => navigateToScreen(6)}
            underlayColor={color.backgroundDark}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Splash;
