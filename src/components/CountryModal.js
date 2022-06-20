import React from 'react';
import {StyleSheet} from 'react-native';
import { colors, fonts } from '../constants/theme';
import { scale } from 'react-native-size-matters';
import {  wp } from '../constants/sacling';
import DropDownPicker from 'react-native-dropdown-picker';
    const CONTAINER_WIDTH = wp(17)
    const CountryModal = ({
                placeholder,
                items,setItems,
                selectedItems,
                setSelectItems,
                isVisible,
                setIsVisible,

            }) => {
            return (
                <DropDownPicker
                    open={isVisible}
                    value={selectedItems}
                    searchable={true}
                    searchPlaceholder="Search Here ..."
                    placeholder={`${placeholder}`}
                    modalTitle={"Please Select"}
                    listMode="MODAL"
                    items={items}
                    setOpen={setIsVisible}
                    setValue={setSelectItems}
                    setItems={setItems}
                    style={{
                        ...styles.style,
                        minWidth:CONTAINER_WIDTH,
                        maxWidth:CONTAINER_WIDTH,
                    }}
                    containerProps={{
                        ...styles.containerProps,
                        minWidth:CONTAINER_WIDTH,
                        maxWidth:CONTAINER_WIDTH,
                    }}
                    containerStyle={{
                        ...styles.containerStyle,
                        minWidth:CONTAINER_WIDTH,
                        maxWidth:CONTAINER_WIDTH,
                    }}
                    ArrowUpIconComponent={({style}) => null }
                    ArrowDownIconComponent={({style}) => null }
                    labelStyle={{...styles.AllLabelText, textAlign:"center"}}
                    searchContainerStyle={styles.searchContainerStyle}
                    searchTextInputProps={styles.searchTextInputProps}
                    searchTextInputStyle={styles.AllLabelText}
                    customItemContainerStyle={{
                        backgroundColor: "#000"
                    }}
                    closeIconStyle={{
                        width: scale(30),
                        height: scale(30)
                    }}
                    modalProps={{
                        animationType: "fade",
                    }}
                    placeholderStyle={{
                        color: "#696969",
                        fontFamily:fonts.Medium,
                        includeFontPadding:false
                    }}

                    listItemContainerStyle={{
                        height:scale(35),
                        borderBottomWidth:1,
                        borderBottomColor:"rgba(0,0,0,.1)"
                    }}
                    listItemLabelStyle={styles.AllLabelText}
                    selectedItemContainerStyle={{
                        backgroundColor: "rgba(0,0,0,.1)",

                    }}
                    selectedItemLabelStyle={styles.AllLabelText}
                />

        );
    };



export default CountryModal;

const styles = StyleSheet.create({
   style:{
        backgroundColor:"#fff",
        marginTop:0,
        maxHeight:scale(30),
        minHeight:scale(30),
        borderWidth:0,
        borderRightWidth:1,
        borderColor:colors.divide_color,
        borderRadius:0,
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:0,
        paddingTop:0,
        paddingLeft:0,
        paddingRight:0,
    },
    containerProps:{
        backgroundColor:"#fff",
        maxHeight:scale(30),
        minHeight:scale(30),
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:0,
        paddingTop:0,
        paddingLeft:0,
        paddingRight:0,
    },
    containerStyle:{
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:0,
        paddingTop:0,
        paddingLeft:0,
        paddingRight:0,
        height:scale(30),
        backgroundColor:"#fff",
        minHeight:scale(30),
        maxHeight:scale(30),

    },
    AllLabelText:{
        color: "#2e2b2b",
        fontFamily:fonts.Medium,
        includeFontPadding:false,
       fontSize:scale(12)
    },
    searchTextInputProps:{
        borderWidth:0,
        backgroundColor:"rgba(0,0,0,.1)",
        height:scale(35),
    },
    searchContainerStyle:{
        borderBottomColor:"rgba(0,0,0,.1)",
        borderBottomWidth:2,
        width:wp(100),
        height:scale(45),
        padding:scale(5),
    }
})
