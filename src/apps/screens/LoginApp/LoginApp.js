import React from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './LoginAppStyles';
import CustomColors from '../../../constants/colors';

const FooterMenu = () => {
  return (
    <View
      style={{
        position: 'relative',
        bottom: 0,
        left: 0,
      }}>
      <View style={Styles.line}></View>

      <View style={Styles.container}>
        <TouchableOpacity style={Styles.button}>
          <Icon color={CustomColors.Black} name="home" />
          <Text style={Styles.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button}>
          <Icon color={CustomColors.Black} name="dashboard" />
          <Text style={Styles.text}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button}>
          <Icon color={CustomColors.Black} name="person" />
          <Text style={Styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FooterMenu;
