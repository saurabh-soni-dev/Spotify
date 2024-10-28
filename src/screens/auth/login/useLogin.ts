import {useAuthNavigation} from '@hooks/useAppNavigation';
import {checkEmail} from '@utility/validation/stringValidation';
import {useState, useCallback} from 'react';

const useLogin = () => {
  const navigation = useAuthNavigation();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState<boolean>(false);

  // Function to update dynamic values in the state
  const updateFieldValue = useCallback((field: string, value: string) => {
    setLoginInfo(prev => ({...prev, [field]: value}));
    validateField(field, value);
  }, []);

  // Validation function for all fields using switch-case
  const validateField = useCallback(
    (field: string, value: string) => {
      let newErrors = {...errors};

      switch (field) {
        case 'email':
          if (!value) {
            newErrors.email = 'Email is required.';
          } else if (!checkEmail(value)) {
            newErrors.email = 'Email is invalid.';
          } else {
            newErrors.email = '';
          }
          break;

        case 'password':
          if (!value) {
            newErrors.password = 'Password is required.';
          } else if (value.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
          } else {
            newErrors.password = '';
          }
          break;

        default:
          break;
      }

      // Update state with errors and form validity
      setErrors(newErrors);
      setIsLogin(Object.values(newErrors).every(error => error === ''));
    },
    [errors],
  );

  //** On press next button */
  const onpressLogin = () => {
    navigation.navigate('HomeBottomTab');
    // Handle the next button logic here
  };

  //** On press next button */
  const onpressLoginWithoutPassword = () => {
    navigation.goBack();
    // Handle the next button logic here
  };

  return {
    loginInfo,
    updateFieldValue,
    errors,
    isLogin,
    onpressLogin,
    onpressLoginWithoutPassword,
  };
};

export default useLogin;
