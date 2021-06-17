import CustomColors from '../../colors'
import { StyleSheet } from 'react-native'
export const Styles = StyleSheet.create({
nav: {
        backgroundColor: CustomColors.White,
        // flex: 1,
        flexDirection:'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingLeft:20,
        paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    },
    text: {
        fontFamily: 'ubuntu',
        fontWeight:'bold',
        fontSize: 18,
        color:CustomColors.DarkBlue,
    },
});