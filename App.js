import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import NavBar from './screen/components/NavBarApp/NavBar'
import FooterMenu from './screen/components/FooterMenuApp/FooterMenu'

const App = () => {
  return (
    <View>
      <NavBar/>      
      <FooterMenu/>
    </View>
  );
}

export default App;