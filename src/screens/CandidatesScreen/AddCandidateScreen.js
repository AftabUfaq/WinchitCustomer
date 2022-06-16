import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,ScrollView} from 'react-native';
import { commonStyles,textStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import UpLoadComponent from "../../components/Uploadcomponent"
import CustomButton from '../../components/Button'
import DrawLine from '../../components/DrawLine';
import { scale } from 'react-native-size-matters';
import CustomTextInput from '../../components/TextInput';
import ArrayInput from '../../components/ArrayInput';
import Spacer from '../../components/Spacer';
    const AddCandidatesScreen = ({navigation}) => {
        const [filepath, setFilePath] = useState({
            path:null, ext:null, name:null
        })
        const [candidate_profile, setCandidateProfile] = useState({
            first_name:"",
            first_name_error:"",
            last_name:"",
            last_name_error:"",
            primary_email:"",
            primary_email_error:"",
            secondary_email:"",
            secondary_email_error:"",
            status:"",
            status_error:"",
            mobile:"",
            mobile_error:"",
            skills:["React-Native" , "React", "BlockChain","DB", "Data Analysis", "Content Writer SEO Specilist"],
            profile_summary:"",
            candidate_owner:"",
            attach_resume:"",
            phone_home:"",
            phone_home_error:"",
            phone_work:"",
            phone_work_error:"",
            phone_direct:"",
            phone_direct_error:"",
            fax:"",
            fax_error:"",
            emergency_contact:"",
            emergency_contact_error:"",
            emergency_no:"",
            emergency_no_error:"",
            socail_media:"",
            socail_media_error:"",
            address:"",
            address_error:"",
            city:"",
            city_error:"",
            zip:"",
            zip_error:""
        })
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Add Candidate"}
                    />
                    <UpLoadComponent
                        filepath={filepath}
                        placeholder={"Upload Candidate resume or import vCard"}
                        setFilePath={(file) => setFilePath(file)}
                        title={"Upload Candidate resume or import vCard"}
                    />
                    <CustomButton 
                        loading={false}
                        loadingText={"Submitting"}
                        onPress={() => alert("false")}
                        text={"Parse  Candidate"}
                    />
                    <DrawLine marginTop={scale(5)} />
                    <DrawLine marginTop={scale(.5)} />
                    <ScrollView 
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false} >
                    <CustomTextInput
                        placeholder={'First name'}
                        value={candidate_profile.first_name}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, first_name:text})
                        }}
                        errorMessage={""}
                    />
                   
                    <CustomTextInput
                        placeholder={'Last name'}
                        value={candidate_profile.last_name}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, last_name:text})
                        }}
                        errorMessage={""}
                    />
                    <CustomTextInput
                        placeholder={'Primary email'}
                        value={candidate_profile.primary_email}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, primary_email:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Secondary email'}
                        value={candidate_profile.secondary_email}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, secondary_email:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Status'}
                        value={candidate_profile.status}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, status:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Mobile'}
                        value={candidate_profile.mobile}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, mobile:text})
                        }}
                        errorMessage={""}
                    />
                     <ArrayInput
                        placeholder={'Add Skills'}
                        skills={candidate_profile.skills}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onAdd={(skill) => {
                            let temp_skills = candidate_profile.skills
                            temp_skills.push(skill)
                            setCandidateProfile({...candidate_profile, skills:temp_skills})
                        }}
                        onChangeText={index => {
                            let temp_skills = candidate_profile.skills
                            delete temp_skills[index]
                            setCandidateProfile({...candidate_profile, skills:temp_skills})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Profile Summary'}
                        value={candidate_profile.profile_summary}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, profile_summary:text})
                        }}
                        errorMessage={""}
                    />
                    <CustomTextInput
                        placeholder={'Candidate owner'}
                        value={candidate_profile.candidate_owner}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, candidate_owner:text})
                        }}
                        errorMessage={""}
                    />
                    <UpLoadComponent
                        filepath={filepath}
                        placeholder={"Upload Candidate resume"}
                        setFilePath={(file) => setFilePath(file)}
                        title={"Upload Candidate resume"}
                    />
                    <CustomTextInput
                        placeholder={'Phone home'}
                        value={candidate_profile.phone_home}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, phone_home:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Phone work'}
                        value={candidate_profile.phone_work}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, phone_work:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Phone direct'}
                        value={candidate_profile.phone_direct}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, phone_direct:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Fax'}
                        value={candidate_profile.fax}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, fax:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Emergency Contacy'}
                        value={candidate_profile.emergency_contact}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, emergency_contact:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Emergency no'}
                        value={candidate_profile.emergency_no}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, emergency_no:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'Social media'}
                        value={candidate_profile.socail_media}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, socail_media:text})
                        }}
                        errorMessage={""}
                    />
                    
                     <CustomTextInput
                        placeholder={'Address'}
                        value={candidate_profile.address}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, address:text})
                        }}
                        errorMessage={""}
                    />
                     <CustomTextInput
                        placeholder={'City'}
                        value={candidate_profile.city}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, city:text})
                        }}
                        errorMessage={""}
                    />
                    <CustomTextInput
                        placeholder={'Zip Code'}
                        value={candidate_profile.zip}
                        borderWidth={1}
                        lableColor={colors.dark_primary_color}
                        borderRadius={scale(5)}
                        onChangeText={text => {
                            setCandidateProfile({...candidate_profile, zip:text})
                        }}
                        errorMessage={""}
                    />
                    <Spacer height={scale(10)} />
                     <CustomButton 
                        loading={false}
                        loadingText={"Submitting"}
                        onPress={() => alert("false")}
                        text={"Save"}
                    />
                    <Spacer height={scale(10)} />
                </ScrollView>
                    
                </View>
            </SafeAreaView>
            
        );
    };


export default AddCandidatesScreen;

