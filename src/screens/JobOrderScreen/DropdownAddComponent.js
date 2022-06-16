import React from 'react';
import {StyleSheet, TouchableOpacity,View,Text} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomButton from '../../components/Button';
import { commonStyles, textStyles} from '../../styles';
import { colors, fonts } from '../../constants/theme';
import { scale, verticalScale } from 'react-native-size-matters';
import CustomTextInput from '../../components/TextInput';
import Modal from 'react-native-modal';
import { AppScreenWidth, width } from '../../constants/sacling';
import Spacer from '../../components/Spacer';
    const DropdownAddComponent = ({zIndex=100,placeholder,items,setItems,selectedItems,setSelectItems,isVisible,setIsVisible,company_name,setCompanyName}) => { 
       
        return (
            <View style={{marginTop:scale(5), zIndex:zIndex, backgroundColor:"#fff"}} >
                    <Text style={{...textStyles.Label,marginLeft:scale(5), color:colors.dark_primary_color}} >Add {placeholder}</Text>
                    <View style={styles.mainRow} >
                        <SearchableDropdown
                            onItemSelect={(item) => {
                                setSelectItems(item.name);
                            }}
                            containerStyle={styles.containerStyle}
                            itemStyle={styles.itemStyle}
                            itemTextStyle={styles.itemTextStyle}
                            itemsContainerStyle={styles.itemsContainerStyle}
                            items={items}
                            resetValue={null}
                            textInputProps={{
                                placeholder: `Please select a ${placeholder}`,
                                ...styles.textInputProps,
                                value:selectedItems,
                                onTextChange: text => setSelectItems(text)
                            }}
                            listProps={styles.listProps}
                        />   
                    <TouchableOpacity 
                        style={styles.AddSquareButton}
                        onPress={() => setIsVisible(true)}
                    >
                        <AntDesign 
                            name={"plus"} 
                            size={scale(30)} 
                            color={colors.white} 
                        />
                    </TouchableOpacity>  
                </View>      
                <Modal 
                    isVisible={isVisible}
                    useNativeDriver={true}
                    animationIn={"fadeInUp"}
                    animationInTiming={500}
                    animationOut={"fadeOutDown"}
                    animationOutTiming={500}
                    backdropOpacity={.3}
                    onBackdropPress={() => setIsVisible(false)}
                    style={{
                        margin:0
                    }}
                >
                    <View style={styles.ModalMainView}>
                        <View style={styles.ModalHeaderView}>
                            <Text style={{...textStyles.Label, color:"#fff"}} >Add {placeholder}</Text>
                        </View>
                        <Spacer height={scale(40)} />
                        <CustomTextInput
                            placeholder={`Enter ${placeholder} name`}
                            value={company_name}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                         
                            onChangeText={text => {
                                setCompanyName(text)
                            }}
                            errorMessage={""}
                        />
                        <Spacer />
                        <CustomButton
                            loading={false}
                            loadingText={"Submitting"}
                            onPress={() => {
                                let temp_itms = items;
                                temp_itms.push({id:Math.random(), name:company_name})
                                setItems(temp_itms)
                                setCompanyName(null)
                                setSelectItems(company_name)
                                setIsVisible(false)
                            }}
                            text={"Add"}
                            width={AppScreenWidth-scale(40)}
                        />
                    </View>
                </Modal> 
            </View>
        );
    };



export default DropdownAddComponent;

const styles = StyleSheet.create({
    mainRow:{
        flexDirection:"row", 
      
       
        width:width-scale(10), 
        justifyContent:"space-evenly", 
        alignItems:"center",
        alignSelf:"center"
    },
    containerStyle:{
        
        zIndex:100, 
        width:width-scale(60)
    },
    itemStyle:{
        padding:scale(5),
        marginTop:scale(2),
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        zIndex:100,
        borderRadius:scale(5),
    },
    itemTextStyle:{ 
        color: '#222',
        fontSize:scale(12),
        zIndex:100,
        fontFamily:fonts.Medium,
        paddingVertical:scale(2),
        paddingHorizontal:scale(10),
    },
    itemsContainerStyle:{ 
        position:"absolute",
        width:width-scale(15),
        zIndex:100,
        marginTop:scale(50)
    },
    textInputProps:{
       
        underlineColorAndroid: "transparent",
        
        fontFamily:fonts.Medium,
        zIndex:100,
        style: {
            paddingVertical:scale(5),
            paddingHorizontal:scale(10),
            borderWidth:scale(1),
            zIndex:100,
            borderColor: '#ccc',
            borderRadius:scale(5),
        }
    },
    listProps:{
        nestedScrollEnabled: true,
        showsVerticalScrollIndicator:false  
    },
    AddSquareButton:{
        zIndex:-1, 
        width:scale(35), 
        justifyContent:"center",
        alignItems:"center",
        borderRadius:scale(5),
        height:scale(35), 
        backgroundColor:colors.dark_primary_color
    },
    ModalMainView:{
        overflow:"hidden",
        width:AppScreenWidth+scale(5),
        alignSelf:"center", 
        justifyContent:"center", 
        alignItems:"center",
        borderRadius:scale(5), 
        backgroundColor:"#fff",
        paddingVertical:verticalScale(20)
    },
    ModalHeaderView:{
        position:"absolute",
        width:AppScreenWidth+scale(5),
        height:scale(40),
        justifyContent:"center", 
        alignItems:"center",
        marginBottom:scale(40),
        top:0,
        backgroundColor:colors.dark_primary_color
    }
})
