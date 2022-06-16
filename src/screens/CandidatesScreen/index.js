import React from 'react';
import {FlatList,SafeAreaView,StatusBar,TouchableOpacity,View,} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { commonStyles} from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import CandidateProfileCard from './CandidateProfileCard'
import {faker} from '@faker-js/faker';
import { scale } from 'react-native-size-matters';
import { MainRoutes } from '../../constants/routes';
 faker.seed(10);
    
    const CandidatesScreen = ({navigation}) => {

        const DATA = [...Array(50).keys()].map((_, i) => {
            return {
               
                image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100) + 1}.jpg`,
                name: faker.name.findName(),
                jobTitle: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                job_description: `${faker.address.cityName()} ${faker.address.country()}`,
                status: `Active Canddidate`,
            };
        });
       
        const renderItem = ({item, index}) => {
                return(
                    <CandidateProfileCard 
                        item={item}
                        onPress={() => navigation.navigate(MainRoutes.CandidatesDetailsScreen)}
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
                        title={"Candidates"}
                    />
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    
                    />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("AddCandidatesScreen")}
                        style={commonStyles.AddButton}>
                        <AntDesign name={"pluscircle"} size={scale(35)} color={colors.dark_primary_color} />
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
            
        );
    };


export default CandidatesScreen;

