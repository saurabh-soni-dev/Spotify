import {FC} from 'react';
import useLogin from './useLogin';
import {styles} from './login.style';
import {CustomStatusBar, CustomText, Header} from '@components/componentsIndex';
import {View} from 'react-native';
import color from '@theme/color';

const Login: FC = () => {
  const {} = useLogin();
  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor={color.backgroundDark} />
      <Header title="" />
      <View style={styles.mainContainer}>
        <CustomText>Login</CustomText>
      </View>
    </View>
  );
};

export default Login;
