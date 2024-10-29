import React, {FC} from 'react';
import HomeBottomTab from './HomeBottomTab';
import {SharedStateProvider} from './SharedContext';

const SharedTransition: FC = () => {
  return (
    <SharedStateProvider>
      <HomeBottomTab />
    </SharedStateProvider>
  );
};

export default SharedTransition;
