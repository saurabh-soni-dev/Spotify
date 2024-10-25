import {
  CustomStatusBar,
  CustomText,
  TextButton,
} from '@components/componentsIndex';
import imageIndex from '@imageIndex';
import color from '@theme/color';
import {Log} from '@utility/log';
import React, {FC} from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './splash.style';
import useSplash from './useSplash';

const Splash: FC = () => {
  const {navigateToScreen} = useSplash();
  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor={color.background} />
      <LinearGradient
        start={{x: 0.0, y: -2}}
        end={{x: 0.0, y: 0.5}}
        colors={[color.inactive, color.background]}
        style={styles.linearGradient}>
        <View style={styles.logoView}>
          <Image
            source={imageIndex.appLogo}
            resizeMode="contain"
            style={styles.logo}
            tintColor={color.text}
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
            underlayColor={color.primary}
          />
          <TextButton
            type="outlinedButton"
            label="Continue with phone number"
            labelStyle={styles.loginText}
            onPress={() => navigateToScreen(1)}
            underlayColor={color.inactive}
          />
          <TextButton
            type="outlinedButton"
            label="Continue with Google"
            labelStyle={styles.loginText}
            onPress={() => navigateToScreen(1)}
            underlayColor={color.inactive}
          />
          <TextButton
            type="outlinedButton"
            label="Continue with Facebook"
            labelStyle={styles.loginText}
            onPress={() => navigateToScreen(1)}
            underlayColor={color.inactive}
          />
          <TextButton
            type="onlyText"
            label="Log in"
            labelStyle={styles.loginText}
            onPress={() => navigateToScreen(1)}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Splash;
