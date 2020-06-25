import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { responsiveHeight,responsiveWidth,responsiveScreenFontSize } from 'react-native-responsive-dimensions';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Main(){
    return(
        <View style={styles.content}>
            <View style={styles.left}>
                <MaterialIcons name="menu" size={screenWidth * 0.1} color='black'/>
                <Text style={styles.text}>SJBSVM</Text>
            </View>

            <View style={styles.right}>
                <Ionicons name="md-notifications" size={screenWidth * 0.1} color='black'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:responsiveWidth(100),
        height:responsiveHeight(10)
    },
    left:{
        flexDirection:'row',
        paddingLeft:screenWidth * 0.01,
        fontSize: screenWidth * 0.1
    },
    right:{
        paddingRight:screenWidth * 0.01,
        fontSize: screenWidth * 0.1
    },
    text:{
        fontSize: screenWidth * 0.1
    }
})