import React, { useState } from 'react';
import {SafeAreaView,StatusBar,TouchableOpacity,View,Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomButton from '../../components/Button';
import { commonStyles, textStyles} from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors } from '../../constants/theme';
import { scale, verticalScale } from 'react-native-size-matters';
import CustomTextInput from '../../components/TextInput';
import Modal from 'react-native-modal';
import { AppScreenWidth } from '../../constants/sacling';
import Spacer from '../../components/Spacer';
    const AddJobScreen = ({navigation}) => { 
        const [isVisible, setIsVisible] = useState(false)
        const [company_name, setCompanyName] = useState("")
        return (
            <SafeAreaView style={commonStyles.SafeAreaView} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Add Job"}
                    />
                    <TouchableOpacity 
                        style={{marginTop:scale(100)}}
                        onPress={() => setIsVisible(true)}
                    >
                        <AntDesign 
                            name={"pluscircle"} 
                            size={scale(35)} 
                            color={colors.dark_primary_color} 
                        />
                    </TouchableOpacity>
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
                        <View 
                            style={{
                                overflow:"hidden",
                                width:AppScreenWidth+scale(5),
                                alignSelf:"center", 
                                justifyContent:"center", 
                                alignItems:"center",
                                borderRadius:scale(5), 
                                backgroundColor:"#fff",
                                paddingVertical:verticalScale(20)
                            }}>
                            <View style={{
                                position:"absolute",
                                width:AppScreenWidth+scale(5),
                                height:scale(40),
                                justifyContent:"center", 
                                alignItems:"center",
                                marginBottom:scale(40),
                                top:0,
                                backgroundColor:colors.dark_primary_color
                            }}>
                                <Text style={{...textStyles.Label, color:"#fff"}} >Add Company</Text>
                            </View>
                            <Spacer height={scale(40)} />
                            <CustomTextInput
                                placeholder={'Company name'}
                                value={company_name}
                                borderWidth={1}
                                lableColor={colors.dark_primary_color}
                                borderRadius={scale(5)}
                                width={AppScreenWidth-scale(20)}
                                onChangeText={text => {
                                    setCompanyName(text)
                                }}
                                errorMessage={""}
                            />
                            <Spacer />
                            <CustomButton
                                loading={false}
                                loadingText={"Submitting"}
                                onPress={() => setIsVisible(false)}
                                backgroundColor={"#0073B4"}
                                text={"Add"}
                                width={AppScreenWidth-scale(40)}
                               
                            />
                        </View>
                    </Modal>
                </View>
            </SafeAreaView> 
        );
    };



export default AddJobScreen;

