import React from 'react';
import { View,Text,StyleSheet,Dimensions,Image } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function ImmageRow(){
    return(

        <View style={styles.content}>
                <View style={styles.im}>
                    <Image source={require('../img/sample.jpg')} style={styles.imStyle}/>
                </View>

                <View style={styles.im}>
                    <Image source={require('../img/sample.jpg')} style={styles.imStyle}/>
                </View>

                <View style={styles.im}>
                    <Image source={require('../img/sample.jpg')} style={styles.imStyle}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    im:{
        padding:20,
        borderWidth:1,
        borderColor:'brown',
        borderRadius:100,
        marginTop:3,
        marginBottom:3

    },
    imStyle:{
        height:responsiveWidth(9),
        width:responsiveWidth(9),
        borderRadius:100
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
})