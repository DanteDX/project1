import React from 'react';
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import Main from './components/main_header';
import Person from './components/person_header';
import Chart from './components/chart'
import ImmageComponent from './components/ImageComponent';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function App(){

  return(
    <View style={styles.container}>
        <Main />
        <Person />
        <Chart />
        <ImmageComponent />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginTop:20,
    width:responsiveWidth(100),
    height:responsiveHeight(100),
    flex:1,
    flexDirection:'column',
    backgroundColor:'blue'
  }
})

