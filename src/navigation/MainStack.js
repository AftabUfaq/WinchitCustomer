import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'

import CandidatesScreen from '../screens/CandidatesScreen';
import AddCandidatesScreen from '../screens/CandidatesScreen/AddCandidateScreen';
import CandidatesDetailsScreen from '../screens/CandidatesScreen/CandidateDetailScreen';

import HomeScreen from '../screens/HomeScreen/index';
import EditProfileScreen from '../screens/EditProfileScreen'

import CompanyScreen from '../screens/CompanyScreen';

import ContactScreen from '../screens/ContactScreen';
import AddCompanyScreen from '../screens/CompanyScreen/AddCompanyScreen';
import JobOrderScreen from '../screens/JobOrderScreen';
import AddJobScreen from '../screens/JobOrderScreen/AddJobScreen'
import JobDetailsScreen from '../screens/JobOrderScreen/JobDetailsScreen'

import OnBoardingScreen from '../screens/OnBoardingScreen';
import PlacementsScreen from '../screens/PlacementScreen';
import TimeSheetScreen from '../screens/TimeSheetScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import InvoicesScreen from '../screens/InvoicesScreen';
import DashBoardScreen from '../screens/DasboardScreen';
import SettingsScreen from '../screens/SettingsScreen';



import DrawerContent from './DrawerContent';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
    return(
        <Stack.Navigator
            initialRouteName='HomeScreen'
        >
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="EditProfileScreen" 
                component={EditProfileScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="CompanyScreen" 
                component={CompanyScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="AddCompanyScreen" 
                component={AddCompanyScreen} 
                options={{
                    headerShown:false
                }}
            />



            <Stack.Screen 
                name="ContactScreen" 
                component={ContactScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="JobOrderScreen" 
                component={JobOrderScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="AddJobScreen" 
                component={AddJobScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="JobDetailsScreen" 
                component={JobDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="CandidatesScreen" 
                component={CandidatesScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="AddCandidatesScreen" 
                component={AddCandidatesScreen} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="CandidatesDetailsScreen" 
                component={CandidatesDetailsScreen} 
                options={{
                    headerShown:false
                }}
            />
            

            <Stack.Screen 
                name="OnBoardingScreen" 
                component={OnBoardingScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="PlacementsScreen" 
                component={PlacementsScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="TimeSheetScreen" 
                component={TimeSheetScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="ExpensesScreen" 
                component={ExpensesScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="InvoicesScreen" 
                component={InvoicesScreen} 
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="DashBoardScreen" 
                component={DashBoardScreen} 
                options={{
                    headerShown:false
                }}
            />


            <Stack.Screen 
                name="SettingsScreen" 
                component={SettingsScreen} 
                options={{
                    headerShown:false
                }}
            />
            
            
        </Stack.Navigator>
    )
}
const StackNavigator = () => (
    <Drawer.Navigator
      gestureEnabled={false}
      screenOptions={{
        swipeEnabled:true,
        headerShown:false
      }}
        drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name ="MainStack" headerShown={false}>
                {props => <MainStack {...props} />}
            </Drawer.Screen>
    </Drawer.Navigator>
)

export default StackNavigator;