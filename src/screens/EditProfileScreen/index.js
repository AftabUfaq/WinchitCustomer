import React from 'react';
import { SafeAreaView,View,StyleSheet,Text} from 'react-native';
import { commonStyles,textStyles } from '../../styles';
import CustomButton from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import { scale, verticalScale } from 'react-native-size-matters';
    const EditProfileScreen = ({navigation}) => {
        return (
            <View style={commonStyles.container} >
                <CustomHeader 
                    show_backButton={true}
                    isdrawer={true}
                    onPress={() => navigation.openDrawer()}
                    title={"Edit Profile"}
                />
               <View style={{height:verticalScale(500)}} />
                <CustomButton
                    onPress={() => navigation.goBack()}
                    loading={false}
                    text={"Save"}
                    loadingText={"Processing"}
                />
            </View>
        );
    };


export default EditProfileScreen;
