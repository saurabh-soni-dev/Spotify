import {
  MAX_PLAYER_HEIGHT,
  MIN_PLAYER_HEIGHT,
} from '@utility/functions/constant';
import React, {createContext, FC, ReactNode, useContext} from 'react';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

interface SharedStateContextProps {
  translationY: Animated.SharedValue<number>;
  expandPlayer: () => void;
  collapsePlayer: () => void;
}

const SharedStateContext = createContext<SharedStateContextProps | undefined>(
  undefined,
);

export const SharedStateProvider: FC<{children: ReactNode}> = ({children}) => {
  const translationY = useSharedValue(0);
  const expandPlayer = () => {
    translationY.value = withTiming(-MAX_PLAYER_HEIGHT + MIN_PLAYER_HEIGHT, {
      duration: 300,
    });
  };
  const collapsePlayer = () => {
    translationY.value = withTiming(0, {duration: 300});
  };

  return (
    <SharedStateContext.Provider
      value={{
        translationY,
        expandPlayer,
        collapsePlayer,
      }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (context === undefined) {
    throw new Error(
      'useSharedState must be used withiin a SharedStateProvider',
    );
  }
  return context;
};
