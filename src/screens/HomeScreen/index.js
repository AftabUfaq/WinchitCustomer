import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Foundation from 'react-native-vector-icons/Foundation'
import { scale, verticalScale } from 'react-native-size-matters';
import { commonStyles,textStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { MainRoutes } from '../../constants/routes';
import { colors, fonts } from '../../constants/theme';
import { AppScreenWidth, hp, width } from '../../constants/sacling';
import { useSelector } from 'react-redux';

import Job from '../../assets/images/job.svg'
import OnBoarding from '../../assets/images/onboarding.svg'

    const HomeScreen = ({navigation}) => {
       
      
        const {user} = useSelector(state => state.LoginReducer)
        
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={true}
                        onPress={() => navigation.openDrawer()}
                        title={"DashBoard"}
                    />
                    <View style={{width:AppScreenWidth,marginVertical:scale(5) ,alignItems:"flex-start", alignSelf:"center"}} >
                        <Text style={styles.headingtext} >Welcome !</Text>
                        <Text style={styles.nameText} >{user.preferred_name}</Text>
                        <Text style={styles.paragraph} >Streamline your company’s business efficiently managing candidates, jobs and placements</Text>
                    </View>
                    <View style={styles.main} />

                    <View style={styles.row} >
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.CompanyScreen)} 
                            style={styles.box} >
                            <FontAwesome 
                                name="building" 
                                color={colors.dark_primary_color} 
                                size={scale(30)} 
                            />
                            <Text style={styles.textStyle}>Company</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.ContactScreen) } 
                            style={styles.box} >
                            <FontAwesome5 
                                name="user-tie" 
                                color={colors.dark_primary_color} 
                                size={scale(30)} 
                            />
                            <Text style={{...styles.textStyle}}>Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.JobOrderScreen) } 
                            style={styles.box} >
                            <Job 
                                width={scale(30)} 
                                height={scale(30)}
                            />
                            <Text style={{...styles.textStyle}}>Job Orders</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row} >
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.CandidatesScreen)} 
                            style={styles.box} >
                            <FontAwesome5 
                                name="users" 
                                color={colors.dark_primary_color} 
                                size={scale(30)} 
                            />
                            <Text style={styles.textStyle}>Candidates</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.OnBoardingScreen) } 
                            style={styles.box} >
                            <OnBoarding 
                                width={scale(30)} 
                                height={scale(30)}
                            />
                            <Text style={{...styles.textStyle}}>onBoarding</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.PlacementsScreen) } 
                            style={styles.box} >
                            <Foundation 
                                name="target" 
                                color={colors.dark_primary_color} 
                                size={scale(40)} 
                            />
                            <Text style={{...styles.textStyle}}>Placements</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row} >
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.TimeSheetScreen)} 
                            style={styles.box} >
                            <AntDesign 
                                name="clockcircle" 
                                color={colors.dark_primary_color} 
                                size={scale(30)} 
                            />
                            <Text style={styles.textStyle}>TimeSheets</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.ExpensesScreen) } 
                            style={styles.box} >
                            <Entypo 
                                name="credit" 
                                color={colors.dark_primary_color} 
                                size={scale(30)} 
                            />
                            <Text style={{...styles.textStyle}}>Expenses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.InvoicesScreen) } 
                            style={styles.box} >
                            <FontAwesome5 
                                name="file-invoice-dollar" 
                                color={colors.dark_primary_color} 
                                size={scale(30)} 
                            />
                            <Text style={{...styles.textStyle}}>Invoices</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row} >
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.DashBoardScreen)} 
                            style={styles.box} >
                            <FontAwesome 
                                name="dashboard" 
                                color={colors.dark_primary_color} 
                                size={scale(30)} 
                            />
                            <Text style={styles.textStyle}>Dashboard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate(MainRoutes.SettingsScreen) } 
                            style={styles.box} >
                            <FontAwesome 
                                name="gears" 
                                color={colors.dark_primary_color} 
                                size={scale(30)} 
                            />
                            <Text style={{...styles.textStyle}}>Settings</Text>
                        </TouchableOpacity>
                      
                    </View>
                  
                    <View style={styles.main2} >
                        <Text style={styles.paragraph}>
                            Copyright @{new Date().getFullYear()} RecruitBPM All Rights Reserved
                        </Text>
                    </View>
                
                </View>
            </SafeAreaView>
            
        );
    };


export default HomeScreen;

const styles = StyleSheet.create({
    main:{
        height:hp(55),
        width:width*1.2,
        zIndex:-1,
        position:"absolute",
        top:verticalScale(40),
        borderBottomRightRadius:hp(100),
        backgroundColor:colors.dark_primary_color
    },
    main2:{
        height:hp(5),
        width:width,
        zIndex:10,
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:scale(5),
        bottom:scale(0),
     
        borderTopLeftRadius:hp(3),
        borderTopRightRadius:hp(3),
        backgroundColor:colors.dark_primary_color
    },
    headingtext:{
        ...textStyles.heading,
        fontSize:scale(22), 
        color:"#fff", 
        textAlign:"left"
    },
    nameText:{
        ...textStyles.title,
        fontSize:scale(18),
        marginTop:scale(2), 
        marginHorizontal:scale(5), 
        color:"#fff", 
        textAlign:"left"
    },
    paragraph:{
        ...textStyles.paragraph,
        fontSize:scale(12), 
        color:"#fff", 
       includeFontPadding:false,
        marginHorizontal:scale(5), 
        textAlign:"left"
    },
    row:{
        width:AppScreenWidth,
        alignSelf:"center",
        flexDirection:"row",
        marginVertical:hp(2),
        justifyContent:"space-evenly"
    },
    box:{
        width:((AppScreenWidth/3)-scale(20)),
        height:((AppScreenWidth/3)-scale(20)),
        backgroundColor:"#fff",
        elevation:10,
        padding:hp(1),
        justifyContent:"center",
        alignItems:"center",
        borderRadius:scale(10),
        borderBottomWidth:3,
        borderWidth:1,
        borderColor:"#fff",
        borderColor:colors.secondary_text_color,
    },
    textStyle: {
        marginTop:scale(10),
        fontFamily:fonts.Medium,
        fontSize:scale(12),
        color: colors.secondary_text_color
    },
})
