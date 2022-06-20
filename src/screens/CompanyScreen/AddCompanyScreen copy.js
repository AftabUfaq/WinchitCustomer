import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,Text,View} from 'react-native';
import { commonStyles} from '../../styles';
import { colors } from '../../constants/theme';
import { scale } from 'react-native-size-matters';

import CustomButton from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/TextInput';
import DropdownAddComponent from '../../components/DropdownAddComponent';
import Spacer from '../../components/Spacer';
    const AddCompanyScreen = ({navigation}) => { 
        
       ///// ******        Companies  Status Data             ****** /////

        const [company_status, setCompaniesStatus] = useState([
            {
              value: 1,
              label: 'Active',
            },
            {
              value: 2,
              label: 'DNS',
            },
            {
              value: 3,
              label: 'Inactive',
            },
            {
              value: 4,
              label: 'Lead',
            },
            {
              value: 5,
              label: 'Paking Lot',
            },
            {
              value: 6,
              label: 'Passive',
            },
            {
              value: 7,
              label: 'Past',
            },
            {
              value: 8,
              label: 'Prospecting',
            },
            {
              value: 9,
              label: 'Compaign',
            },

           
        ]);
        const [selected_company, setSelectCompany] = useState("")
        const [companies_modal_visible, setCompaniesModalVisibe] = useState(false)
        const [company_name, setCompanyName] = useState("")
        
        //////******        Contacts Data             ****** //////////

        const [company_own_list, setCompanyOwnerList] = useState([
            {
              value: 1,
              label: 'Aftab Ameen',
            },
            {
              value: 2,
              label: 'Sajjad Ameen',
            },
            {
              value: 3,
              label: 'Abbas Ameen',
            },
            {
              value: 4,
              label: 'Tajul Amin',
            },
            {
              value: 5,
              label: 'Faryal Amin',
            },
           
        ]);
        const [selected_contact, setSelectContact] = useState("")
        const [contacts_modal_visible, setContactsModalVisibe] = useState(false)
        const [contact_name, setContactName] = useState("")

        //////******        Industry Data             ****** //////////
        const [Industrys, setIndustrys] = useState([
            {
              value: "Disqus",
              label: 'Disqus',
            },
            {
              value: "Facebook",
              label: 'Facebook',
            },
            {
              value: "Google+",
              label: 'Google+',
            },
            {
              value: "LinkedIn",
              label: 'LinkedIn',
            },
            {
              value: "Pinterest",
              label: 'Pinterest',
            },
            {
              value: "Renren",
              label: 'Renren',
            },
            {
              value: "Skype",
              label: 'Skype',
            },
            {
              value: "Snapchat",
              label: 'Snapchat',
            },
            {
              value: "Tumblr",
              label: 'Tumblr',
            },
            {
              value: "Twitter",
              label: 'Twitter',
            },
            {
              value: "Vine",
              label: 'Vine',
            },
            {
              value: "Whatsapp",
              label: 'Whatsapp',
            },
           
            {
              value: "Youtube",
              label: 'Youtube',
            },
           
        ]);
        const [selected_Industry, setSelectIndustry] = useState("")
        const [Industry_modal_visible, setIndustrysModalVisibe] = useState(false)
        const [Industry_name, setIndustryName] = useState("")

        /////////****** Job Data *////////////////////

        const [company_data, setJobData] = useState({
         
            job_title:"",
            job_title_error:"",
            priority:"",
            priority_error:"",
            status:"",
            status_error:"",
            job_type:"",
            job_type_error:"",
            pay_type:"",
            pay_type_error:"",
            bill_rate:"",
            bill_rate_error:"",
            pay_salary:"",
            pay_salary_error:"",
            duration:"",
            duration_error:"",
            no_of_openings:"",
            no_of_openings_error:"",
            description:"",
            description_error:"",
            job_owner:"",
            job_owner_error:"",
            assigned_recruter:"",
            assigned_recruter_error:"",
                        
        })

        return (
            <SafeAreaView style={commonStyles.SafeAreaView} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Add Company"}
                    />
                    <ScrollView 
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false} >
                       
                         <CustomTextInput
                            placeholder={'Company name'}
                            value={company_data.job_title}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,job_title:text })
                            }}
                            errorMessage={""}
                        />
                        <DropdownAddComponent 
                            show_add_button={false}
                            AddButtonPress={() => alert("company")}
                            placeholder={"status"}
                            items={company_status}
                            setItems={setCompaniesStatus}
                            selectedItems={selected_company}
                            setSelectItems={setSelectCompany}
                            isVisible={companies_modal_visible}
                            setIsVisible={setCompaniesModalVisibe}
                            company_name={company_name}
                            setCompanyName={setCompanyName}
                        />
                        
                        <DropdownAddComponent 
                            show_add_button={false}
                            AddButtonPress={() => alert("company")}
                            placeholder={"Account Owner"}
                            items={company_own_list}
                            setItems={setCompanyOwnerList}
                            selectedItems={selected_contact}
                            setSelectItems={setSelectContact}
                            isVisible={contacts_modal_visible}
                            setIsVisible={setContactsModalVisibe}
                            company_name={contact_name}
                            setCompanyName={setContactName}
                        />
                       

                        <CustomTextInput
                            placeholder={'Status'}
                            value={company_data.status}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data, status:text})
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Job type'}
                            value={company_data.job_type}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,job_type:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Pay type'}
                            value={company_data.pay_type}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,pay_type:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Bill rate'}
                            value={company_data.bill_rate}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,bill_rate:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Pay/Salary'}
                            value={company_data.pay_salary}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,pay_salary:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Duration'}
                            value={company_data.duration}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,duration:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'No. of Openings'}
                            value={company_data.no_of_openings}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,no_of_openings:text })
                            }}
                            errorMessage={""}
                        />
                        
                        
                        <CustomTextInput
                            placeholder={'Description'}
                            value={company_data.description}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,description:text })
                            }}
                            errorMessage={""}
                        />

                        <CustomTextInput
                            placeholder={'Job Owner'}
                            value={company_data.job_owner}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,job_owner:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Assigned Recruiter'}
                            value={company_data.assigned_recruter}
                            borderWidth={1}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,assigned_recruter:text })
                            }}
                            errorMessage={""}
                        />
                       

                        <DropdownAddComponent 
                            AddButtonPress={() => alert("company")}
                            placeholder={"industry"}
                            items={Industrys}
                            setItems={setIndustrys}
                            selectedItems={selected_Industry}
                            setSelectItems={setSelectIndustry}
                            isVisible={Industry_modal_visible}
                            setIsVisible={setIndustrysModalVisibe}
                            company_name={Industry_name}
                            setCompanyName={setIndustryName}
                        />
                        <Spacer height={scale(10)} />
                        <View style={{alignSelf:"center"}}>
                            <CustomButton 
                                loading={false}
                                loadingText={"Submitting"}
                                onPress={() => alert("false")}
                                text={"Save"}
                            />
                        </View>
                        <Spacer height={scale(10)} />
                       
                    </ScrollView>
                </View>
            </SafeAreaView> 
        );
    };



export default AddCompanyScreen;

