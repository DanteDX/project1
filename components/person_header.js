import React from 'react';
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { responsiveWidth,responsiveScreenFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



export default function Person(){
    return(
        <View style={styles.main}>
            <View style={styles.icon}>
                <MaterialIcons name="person" size={responsiveWidth(15)} color='black' />
            </View>

            <View style={styles.texts}>
                <Text style={{fontSize: responsiveWidth(6)}}>Hello Akhil</Text>
                <Text style={{fontSize: responsiveWidth(6)}}>CBSE --- VII</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        width:responsiveWidth(100),
        height:responsiveHeight(10),
        flexDirection:'row',
        marginTop:responsiveHeight(1),
        marginLeft:responsiveWidth(10)
    },
    icon:{
        width:responsiveWidth(15),
        height:responsiveWidth(15),
        backgroundColor:'white',
        borderRadius:100,
        padding:responsiveWidth(0.05),
        marginRight:responsiveWidth(2),
    }
})