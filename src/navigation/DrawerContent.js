import React from "react";
import { colors, fonts } from "../constants/theme";
import { View,SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { DrawerContentScrollView } from "@react-navigation/drawer";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Job from '../assets/images/job.svg'
import OnBoarding from '../assets/images/onboarding.svg'
import Placement from '../assets/images/placement.svg'
import Entypo from 'react-native-vector-icons/Entypo'
import {MainRoutes} from '../constants/routes'
import { scale } from "react-native-size-matters";
import {useDispatch} from 'react-redux';
import { Signout } from "../store/actions/LoginActions";

const DrawerContentt = ({ navigation, props }) => {
    const dispatch = useDispatch();
    const  localSignout = () => dispatch(Signout(null))
    return (
        <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}}>
            <View style={styles.drawercontent}>  
                    <Image 
                        source={require("../assets/images/dummy.png")} 
                        style={{
                            width:scale(70),
                            borderRadius:scale(100),
                            height:scale(70), 
                            resizeMode:"cover"
                        }}
                    />
                    <View style={{justifyContent:"flex-start"}}>
                        <Text style={styles.textStyleHeader}>Aftab Ameen</Text>
                    </View> 
                    <TouchableOpacity
                        onPress={() => navigation.navigate(MainRoutes.EditProfileScreen) }
                        style={{
                            position:"absolute",
                            top:scale(10),
                            right:scale(10)
                        }} >
                        <Entypo name="edit" color={"#fff"} size={scale(20)} />
                    </TouchableOpacity>
            </View>
            <DrawerContentScrollView 
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.DrawerContentScrollView}
            > 
               
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.HomeScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <AntDesign 
                            name="home" 
                            color={colors.dark_primary_color} 
                            size={scale(20)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Home</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.CompanyScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <FontAwesome 
                            name="building" 
                            color={colors.dark_primary_color} 
                            size={scale(20)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Company</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.ContactScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <FontAwesome5 
                            name="user-tie" 
                            color={colors.dark_primary_color} 
                            size={scale(20)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Contact</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.JobOrderScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                    <Job 
                        width={scale(20)} 
                        height={scale(20)}
                    />
                    </View>
                    <Text style={styles.textStyle}>Job Order</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.CandidatesScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <FontAwesome5 
                            name="users" 
                            color={colors.dark_primary_color} 
                            size={scale(16)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Candidates</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.OnBoardingScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <OnBoarding 
                            width={scale(20)} 
                            height={scale(20)}
                        />
                    </View>
                    <Text style={styles.textStyle}>Onboarding</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.PlacementsScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <Placement 
                            width={scale(20)} 
                            height={scale(20)}
                        />
                    </View>
                    <Text style={styles.textStyle}>Placements</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.TimeSheetScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <AntDesign 
                            name="clockcircle" 
                            color={colors.dark_primary_color} 
                            size={scale(18)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Timesheets</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.ExpensesScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <Entypo 
                            name="credit" 
                            color={colors.dark_primary_color} 
                            size={scale(20)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Expenses</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.HomeScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <FontAwesome5 
                            name="file-invoice-dollar" 
                            color={colors.dark_primary_color} 
                            size={scale(20)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Invoices</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.DashBoardScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <FontAwesome 
                            name="dashboard" 
                            color={colors.dark_primary_color} 
                            size={scale(18)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Dashboard</Text>
                </TouchableOpacity> 
                <TouchableOpacity   
                    onPress={() => navigation.navigate(MainRoutes.SettingsScreen)} 
                    style={styles.btnView}>
                    <View style={{width:scale(20), height:scale(20)}} >
                        <FontAwesome 
                            name="gears" 
                            color={colors.dark_primary_color} 
                            size={scale(18)} 
                        />
                    </View>
                    <Text style={styles.textStyle}>Settings</Text>
                </TouchableOpacity> 
                
            </DrawerContentScrollView>
            <TouchableOpacity  
                onPress={() => localSignout() } 
                style={styles.logoutbutton}>
                <View style={{width:scale(20), height:scale(20)}} > 
                    <Entypo 
                        name="log-out" 
                        color={colors.dark_primary_color} 
                        size={scale(20)}
                    />
                </View>  
                <Text style={{...styles.textStyle}}>Log Out</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}
export default DrawerContentt;

const styles = StyleSheet.create({
    DrawerContentScrollView:{
        flex:1, 
        backgroundColor:"#fff"
    },
    contentContainerStyle:{
        alignItems:"flex-start",
        paddingTop:0, 
        marginStart:0, 
        justifyContent:"flex-start"
    },
    MainContent:{
        flex: 1,
        alignSelf:"flex-start",
        backgroundColor:"red"
    },
    drawercontent:{
        padding:scale(10), 
      
       width:"100%",
        alignSelf:"flex-start",
        flexDirection: 'row',
        marginBottom:scale(20),
        alignItems:"center",
        backgroundColor:colors.dark_primary_color
    },
   
    btnView: {
        marginLeft:scale(15),
        paddingVertical:scale(8),
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:"rgba(0,0,0,.3)",
        width:"90%",
        alignItems:"center"
    },
    textStyle: {
        marginLeft:scale(10), 
        fontFamily:fonts.Medium,
        fontSize:scale(12),
        color: colors.text_primary_color
    },
    textStyleHeader: {
        marginLeft:scale(10), 
        fontFamily:fonts.Medium,
        fontSize:scale(12),
        color: colors.white
    },
    logoutbutton:{
        marginLeft:scale(15),
        marginBottom:scale(12),
        flexDirection: 'row',
        alignItems:"center", marginLeft:0,
        paddingBottom:scale(10), 
        paddingLeft:scale(15), 
        backgroundColor:"#fff"
    },
})