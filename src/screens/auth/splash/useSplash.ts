import { useAuthNavigation } from '@hooks/useAppNavigation'
import { useCallback } from 'react'

const useSplash = () => {
    const navigation = useAuthNavigation()

    //** Navigate to signup, login, mobile login, google, facebook */
    const navigateToScreen = useCallback((index:number)=>{
    switch (index) {
    case 1:
        navigation.navigate('Signup')
        break;
        case 1:
            navigation.navigate('LoginMobile')
            break;
            case 1:
                navigation.navigate('Signup')
                break;
                case 1:
                    navigation.navigate('Signup')
                    break;

    default:
        break;
}
    },[]) 
  return {
    navigateToScreen
  }
}

export default useSplash