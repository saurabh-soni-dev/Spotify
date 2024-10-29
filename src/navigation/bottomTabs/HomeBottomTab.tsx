import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Create, Home, Library, Premium, Search } from '@screens/index';
import React, { FC } from 'react';
import HomeBottomTabBar from './HomeBottomTabBar';

const Tab = createBottomTabNavigator();
const HomeBottomTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      backBehavior="initialRoute"
      tabBar={props => <HomeBottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Premium" component={Premium} />
      <Tab.Screen name="Create" component={Create} />
    </Tab.Navigator>
  );
};

export default HomeBottomTab;
