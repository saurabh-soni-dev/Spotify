import color from "@theme/color";
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    textButton:{
        width:'100%',
        backgroundColor:color.primary,
        height:hp('7%'),
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',marginBottom:10
    },
    outlinedButton:{
        width:'100%',
        backgroundColor:'transparent',
        height:hp('7%'),
        borderRadius:50,
        borderWidth:0.5,
        borderColor:color.inactive,
        alignItems:'center',
        justifyContent:'center',marginBottom:10
    },
    onlyTextButton:{
        width:'100%',
        backgroundColor:'transparent',
        height:hp('7%'),
        alignItems:'center',
        justifyContent:'center',marginBottom:10
    }
})