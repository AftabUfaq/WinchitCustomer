import React from 'react';
import {FlatList,SafeAreaView,StatusBar,TouchableOpacity,View,} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { commonStyles} from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import JobCard from './JobCard'
import {faker} from '@faker-js/faker';
import { scale } from 'react-native-size-matters';
import { MainRoutes } from '../../constants/routes';
 faker.seed(10);
    
    const JobOrderScreen = ({navigation}) => {

        const DATA = [...Array(50).keys()].map((_, i) => {
            return {
                jobTitle: faker.name.jobTitle(),
                company_name: faker.company.companyName(),
                name: faker.name.findName(),
                location: `${faker.address.cityName()} ${faker.address.country()}`,
                status: `Open`,
            };
        });
       
        const renderItem = ({item, index}) => {
            return(
                <JobCard 
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
                        title={"Jobs"}
                    />
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    
                    />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate(MainRoutes.AddJobScreen)}
                        style={commonStyles.AddButton}>
                        <AntDesign name={"pluscircle"} size={scale(35)} color={colors.dark_primary_color} />
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
            
        );
    };



export default JobOrderScreen;

