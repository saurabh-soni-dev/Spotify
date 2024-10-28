import {useAuthNavigation} from '@hooks/useAppNavigation';
import {checkEmail} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useEffect, useState} from 'react';

const useSignup = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>('demo@gmail.com');
  const [error, setError] = useState<string>('');
  const [isNext, setIsNext] = useState<boolean>(false);

  useEffect(() => {
    setError(validationMessage.emptyEmail);
  }, []);

  // update state values and check validation as well as
  const updateFieldValue = useCallback((value: string) => {
    setEmail(value);
    validateField(value);
  }, []);

  // Validation function for all fields using switch-case
  const validateField = useCallback(
    (value: string) => {
      let isValidate = false;
      if (!value) {
        isValidate = false;
      } else if (!checkEmail(value)) {
        isValidate = false;
      } else {
        isValidate = true;
      }
      setIsNext(isValidate);
    },
    [error],
  );

  // onpress next
  const onpressNext = () => navigation.goBack();

  return {
    email,
    error,
    isNext,
    updateFieldValue,
    onpressNext,
  };
};

export default useSignup;
