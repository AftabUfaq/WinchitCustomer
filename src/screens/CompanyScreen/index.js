import React from 'react';
import {FlatList,SafeAreaView,StatusBar,TouchableOpacity,View,} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { commonStyles} from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import CompanyCard from './CompanyCard'
import {faker} from '@faker-js/faker';
import { scale } from 'react-native-size-matters';
import { MainRoutes } from '../../constants/routes';
import Spacer from '../../components/Spacer';
 faker.seed(10);
    
    const JobOrderScreen = ({navigation}) => {

        const DATA = [...Array(10).keys()].map((_, i) => {
            return {
                company_name: faker.company.companyName(),
                name: faker.name.findName(),
                color:faker.helpers.arrayElement(['#1CAF9A', '#1CAF9A', '#1CAF9A']),
                periority:`${faker.helpers.arrayElement(['Low', 'High', "Medium"])}`,
                location: `${faker.address.cityName()} ${faker.address.country()}`,
                status:faker.helpers.arrayElement(['Active', 'Close', 'Reject']), // `Active`,
            };
        });
       
        const renderItem = ({item, index}) => {
            return(
                <CompanyCard 
                    item={item}
                    onPress={() => navigation.navigate(MainRoutes.JobDetailsScreen)}
                />
            )
            
        }
        return (
            <SafeAreaView style={commonStyles.SafeAreaView} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Companies"}
                    />
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    
                    />
                    
                    <TouchableOpacity 
                        onPress={() => navigation.navigate(MainRoutes.AddCompanyScreen)}
                        style={commonStyles.AddButton}>
                        <AntDesign name={"pluscircle"} size={scale(35)} color={colors.dark_primary_color} />
                    </TouchableOpacity>
                  
                </View>
            </SafeAreaView>
            
        );
    };



export default JobOrderScreen;

