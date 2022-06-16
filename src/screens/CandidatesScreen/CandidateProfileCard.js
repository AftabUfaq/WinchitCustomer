import React, { useEffect } from "react";
import { View,Text,Image, TouchableOpacity, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { AppScreenWidth } from "../../constants/sacling";
import { colors, fonts } from "../../constants/theme";
import { textStyles } from "../../styles";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const CandidateProfileCard = ({item, onPress=null}) => {
 
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={styles.main}>
            
            <Image 
                style={{
                    width:scale(99),
                    height:scale(99),
                    borderRadius:scale(4),
                    resizeMode:"contain",
                    
                }}
                source={{uri:item.image}}
            />
           
            <View style={{marginHorizontal:scale(5),width:AppScreenWidth-scale(155)}}>
                <Text  numberOfLines={1} style={{...textStyles.Label,fontSize:scale(12), fontFamily:fonts.Bold}}>{item.name}</Text>
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <Ionicons 
                            name="mail" 
                            color={"rgba(0,0,0,.8)"} 
                            size={scale(12)} 
                        />
                    </View>
                    <Text  numberOfLines={1} style={styles.text} >{item.email}</Text>
                </View>
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <Feather 
                            name="phone" 
                            color={"rgba(0,0,0,.8)"} 
                            size={scale(12)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item.jobTitle}</Text>
                </View>
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <Ionicons 
                            name="location" 
                            color={"rgba(0,0,0,.8)"} 
                            size={scale(14)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item.job_description}</Text>
                </View>
                <View style={styles.row_icon}>
                    <View style={styles.icon_box} >
                        <FontAwesome5 
                            name="bolt" 
                            color={"rgba(0,0,0,.8)"} 
                            size={scale(14)} 
                        />
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{item.status}</Text>
                </View>

            </View>
            <View style={{width:scale(30),marginLeft:scale(5),  justifyContent:"space-between"}}>
                <View style={styles.box} >
                    <Text style={styles.box_text} >P {( parseInt(Math.random()*10) + 1)}</Text>
                </View>
                <View style={{...styles.box, backgroundColor:"#A7E1DE"}} >
                    <Text style={styles.box_text} >I-S {( parseInt(Math.random()*10) + 1)}</Text>
                </View>
                <View style={{...styles.box, backgroundColor:"#5BC0DE"}} >
                    <Text style={styles.box_text} >C-S {( parseInt(Math.random()*10) + 1)}</Text>
                </View>
                <View style={{...styles.box, backgroundColor:"#F0AD4E"}} >
                    <Text style={styles.box_text} >I {( parseInt(Math.random()*10) + 1)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CandidateProfileCard

const styles = StyleSheet.create({
    main:{
        width:AppScreenWidth,
        elevation:2,
        marginHorizontal:scale(2),
        marginTop:scale(5),
        backgroundColor:"#fff",
        padding:scale(5),
        justifyContent:"space-between",
        flexDirection:"row",
        borderRadius:scale(5),
    },
    row_icon:{
        flexDirection:"row",
       // justifyContent:"center",
        alignItems:"center",
        marginTop:scale(2)
    },
    text:{
        ...textStyles.smallheading,
        includeFontPadding:false, 
        fontSize:scale(10),
        marginLeft:scale(5)
    },
    box_text:{
        ...textStyles.smallheading,
        includeFontPadding:false, 
        fontSize:scale(6),
        color:"#FFF",
        marginLeft:scale(5)
    },
    box:{
        width:scale(30),
        justifyContent:"center",
        alignItems:"center", 
        borderRadius:scale(4), 
        height:scale(15), 
        backgroundColor:"#F3A4B1"
    },
    icon_box:{
        width:scale(15), 
        height:scale(15), 
        alignItems:"center", 
        justifyContent:"center"
    }
})