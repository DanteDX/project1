import React from 'react';
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
const screenWidth = Dimensions.get("window").width;
import { responsiveHeight,responsiveWidth,responsiveScreenFontSize, useResponsiveWidth } from 'react-native-responsive-dimensions';

export default function Chart(){
    
    const data = [
        {
            name:'Absent',
            population:17,
            color:'red',
            legendFontColor:'red',
            legendFontSize:20
        },
        
        {
            name:'Present',
            population:83,
            color:'green',
            legendFontColor:'green',
            legendFontSize:20
        }
        
    ];

    
    const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
    };
    
    return(
        <View style={styles.chartStyle}>
            <Text style={styles.textStyle}>Attendace</Text>
            <PieChart
                data={data}
                width={responsiveWidth(90)}
                height={200}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="0"
                absolute
                chartConfig={chartConfig}
            />
        </View>   
    )
}

const styles = StyleSheet.create({
    chartStyle:{
        padding:responsiveWidth(2),
        backgroundColor:'white',
        borderRadius:20,
        marginHorizontal:responsiveWidth(2),
        marginTop:responsiveHeight(0)
    },
    textStyle:{
        paddingLeft: screenWidth * 0.1,
        fontSize:20
    }
})