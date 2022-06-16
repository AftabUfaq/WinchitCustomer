import React, { useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet, TextInput} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { scale, verticalScale } from "react-native-size-matters";
import { width } from "../constants/sacling";
import { colors, fonts } from "../constants/theme";
import Animated, {FadeOutDown, FadeInDown } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { textStyles } from "../styles/textStyles";
const ArrayInput = ({
            skills,
            borderRadius=0,
            placeholder,
            editable=true,
            lableColor=colors.text_primary_color,
            borderWidth=0, 
            secureTextEntry = false, 
            onChangeText,
            onAdd
        }) => {
  
    const [skill,  setSkill]  = useState("")
    return (
        <View 
            style={styles.mainContainer} >
            <Animated.Text 
                entering={FadeInDown} 
                exiting={FadeOutDown}
                
                style={{...textStyles.Label, color:lableColor}}>
                    {placeholder}
            </Animated.Text>
            <View>
                <TextInput
                    placeholder={"Enter Skills to Add"}
                    placeholderTextColor={colors.divide_color}
                    value={skill}
                    editable={editable}
                    onChangeText={(text) => setSkill(text)}
                    style={{...styles.textInput, borderWidth:borderWidth, borderRadius:borderRadius}}
                />
             
                <TouchableOpacity 
                    onPress={() => {
                        if(skill.trim().length != 0){
                            onAdd(skill)
                            setSkill("")
                        }
                        
                    }}
                    style={styles.AddButton} >
                    <AntDesign 
                        name={"pluscircle"} 
                        size={scale(22)} 
                        color={colors.dark_primary_color}  
                    />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", flexWrap: 'wrap',  overflow:"scroll",}} >
                {skills.map((item, index) => {
                    return(
                        <View 
                            key={`${index}`} 
                            style={styles.SkillsItem}  
                        >
                            <Text style={textStyles.skills_text}>{item}</Text>
                            <TouchableOpacity 
                            onPress={() => onChangeText(index)}
                                style={styles.actionButton}>
                                <MaterialCommunityIcons 
                                    name="delete"
                                    color={colors.delete_icon} 
                                    size={scale(14)} 
                                />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </View>
    )
};

export default ArrayInput


const styles = StyleSheet.create({
    mainContainer:{ 
        width:width-scale(20),
        justifyContent:"center",
        borderWidth:0,  
        alignSelf:"center",
        minHeight:verticalScale(50),
        paddingTop:scale(5), 
        marginVertical:scale(0)
    },
    textInput:{
        backgroundColor:"#fff", 
        marginVertical:verticalScale(0),
        width:width-scale(20), 
        borderColor:colors.divide_color,
        borderBottomWidth:1,
      
        paddingVertical:0,
      
        height:verticalScale(40),
        fontFamily:fonts.Medium,
        paddingHorizontal:scale(10),
        color:colors.text_primary_color
    },
    AddButton:{
        position:"absolute", 
        width:scale(30), 
      
        right:3,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        backgroundColor:"rgba(0,0,0,0)",
        height:verticalScale(40),
        justifyContent:"center",
        alignItems:"center"
    },
    SkillsItem:{
        paddingHorizontal:scale(5),
        paddingVertical:scale(3),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,.1)",
        margin:scale(5),
        borderRadius:scale(5)
    },
    actionButton:{
        paddingLeft:scale(5), 
        alignItems:"center", 
        justifyContent:"center"
    }
})