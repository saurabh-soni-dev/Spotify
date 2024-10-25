import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from './rootStackParams';
import Splash from '@screens/auth/splash/Splash';
import {Login, MobileLogin, Signup} from '@screens/index';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        orientation: 'portrait',
        presentation: 'card',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginMobile" component={MobileLogin} />
    </Stack.Navigator>
  );
};

export default RootStack;
