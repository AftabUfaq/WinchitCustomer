import React from "react";
import {TextInput} from 'react-native'
import { scale, verticalScale } from "react-native-size-matters";
import { AppScreenWidth } from "../constants/sacling";
import { colors, fonts } from "../constants/theme";
const MobileNumberInput =
        ({
            value,placeholder,editable=true,
            TextInputwidth=AppScreenWidth,
            onChangeText
        }) =>   {
                    return (
                        <TextInput
                            placeholder={placeholder}
                            placeholderTextColor={colors.divide_color}
                            value={value}
                            editable={editable}
                            onChangeText={(text) => onChangeText(text)}
                            style={{
                                backgroundColor:"#fff",
                                marginVertical:verticalScale(0),
                                width:TextInputwidth,
                                paddingVertical:0,
                                height:verticalScale(40),
                                fontFamily:fonts.Medium,
                                paddingHorizontal:scale(5),
                                color:colors.text_primary_color
                            }}
                        />
                    )
                };
export default MobileNumberInput
