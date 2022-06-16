import React from "react";
import { StyleSheet, Platform } from "react-native";
import {verticalScale,scale } from "react-native-size-matters";
import { width } from "../constants/sacling";
import { colors } from "../constants/theme";
export const commonStyles = StyleSheet.create({
    SafeAreaView:{
        flex:1, 
        backgroundColor:colors.dark_primary_color
    },
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignSelf:"center",
        alignItems:"center"
    },
    headerMianView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:"flex-end",
        width:width,
        position: 'relative',
        height:Platform.OS === "android"?verticalScale(40):verticalScale(40),
        backgroundColor:colors.dark_primary_color,
        paddingVertical: verticalScale(10),
    },
    hedaerWithIcons:{
        flexDirection: 'row',
        justifyContent:'space-between' ,  
        alignItems:"flex-end",
        width:width,
        position: 'relative',
        height:Platform.OS === "android"?verticalScale(40):verticalScale(40),
        backgroundColor:colors.dark_primary_color,
        paddingBottom: verticalScale(5),
    },
    AddButton:{
        alignSelf:"flex-end", 
        paddingHorizontal:scale(20), 
        paddingVertical:scale(10),
        position:"absolute",
        right:scale(10),
        bottom:verticalScale(10)
    }
})