import React from 'react'
import { Icon } from 'react-native-elements'
import { View, Text,TouchableOpacity,Fragment } from 'react-native'
import { Styles } from './FooterMenuStyle'
import CustomColors from '../../colors'



const FooterMenu = () => {

    return (
        <React.Fragment>
            <View style={Styles.line}></View>
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.button}>
                <Icon  color={CustomColors.Black} name="home"/>
                <Text style={Styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
        style={Styles.button}
            >
                <Icon  color={CustomColors.Black} name="dashboard"/>
        <Text style={Styles.text}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity
        style={Styles.button}
            >
                <Icon  color={CustomColors.Black} name="person"/>
        <Text style={Styles.text}>Profile</Text>
      </TouchableOpacity>
            </View>
            </React.Fragment>

    )
}
export default FooterMenu;