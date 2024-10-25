import {useAuthNavigation} from '@hooks/useAppNavigation';
import {Alert} from '@utility/alert';
import {useCallback} from 'react';

const useSplash = () => {
  const navigation = useAuthNavigation();

  //** Navigate to signup, login, mobile login, google, facebook */
  const navigateToScreen = useCallback((index: number) => {
    switch (index) {
      case 1:
        navigation.navigate('Signup');
        break;
      case 2:
        Alert('Continue with Apple');
        break;
      case 3:
        Alert('Continue with phone number');
        break;
      case 4:
        Alert('Continue with Google');
        break;
      case 5:
        Alert('Continue with Facebook');
        break;
      case 6:
        navigation.navigate('Login');
        break;
      default:
        break;
    }
  }, []);
  return {
    navigateToScreen,
  };
};

export default useSplash;
