import React from 'react';
import { View,Text,StyleSheet,Dimensions,Image } from 'react-native';
import ImmageRow from './ImageRow';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default function ImmageComponent(){
    return(
        <View style={styles.container} >
            <ImmageRow />
            <ImmageRow />
            <ImmageRow />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:responsiveWidth(100),
        height:responsiveHeight(37),
        marginLeft:responsiveWidth(1),
        marginRight:0,
        backgroundColor:'white',
        borderRadius:30,
        paddingTop:responsiveWidth(2),
        marginTop:responsiveWidth(1),
        flexDirection:'column'
    }
})