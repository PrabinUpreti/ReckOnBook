import React from 'react'
import { Icon } from 'react-native-elements'
import { View, Text } from 'react-native'
import { Styles } from './NavBarStyle'
import CustomColors from '../../colors'



const NavBar = () => {

    return (
        <View style={Styles.nav}>
            <Text style={Styles.text}>ReckOnBook</Text>
            <Icon color={CustomColors.DarkBlue} name='filter-list'/>
        </View>

    )
}

export default NavBar;