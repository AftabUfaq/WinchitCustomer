import React, { useEffect, useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet, Text,View} from 'react-native';
import { commonStyles, textStyles} from '../../styles';
import { colors } from '../../constants/theme';
import { scale } from 'react-native-size-matters';
import countires from './contries.json'
import CustomButton from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/TextInput';
import DropdownAddComponent from '../../components/DropdownAddComponent';
import Spacer from '../../components/Spacer';
import MobileNumberInput from '../../components/MobileNumberInput';
import CountryModal from '../../components/CountryModal'
import { wp } from '../../constants/sacling';
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

      //////******        Socila Links             ****** //////////
      const [socail_links, setSocialLinks] = useState([
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

      const [selected_company, setSelectCompany] = useState("US")
      const [companies_modal_visible, setCompaniesModalVisibe] = useState(false)
        //////******        Periorty Data             ****** //////////

      const [priority, setPrioritys] = useState([
        {
          value: 1,
          label: 'Very High',
        },
        {
          value: 2,
          label: 'high',
        },
        {
          value: 3,
          label: 'Medium',
        },
        {
          value: 4,
          label: 'Low',
        },
        {
          value: 5,
          label: 'very low',
        },

      ]);
      const [selected_priority, setSelectPriority] = useState("")
      const [priority_modal_visible, setPrioritysModalVisibe] = useState(false)
      const [priority_name, setPriorityName] = useState("")

      //////******        Techology Data             ****** //////////
      const [technologys, setTechnologys] = useState([
            {
              value: 1,
              label: 'React-Native',
            },
            {
              value: 2,
              label: 'MongoDB',
            },
            {
              value: 3,
              label: 'VS Code',
            },
            {
              value: 4,
              label: 'XCode',
            },
            {
              value: 5,
              label: 'Data Analysis',
            },
      ]);
      const [selected_Technology, setSelectTechnology] = useState("")
      const [Technology_modal_visible, setTechnologysModalVisibe] = useState(false)
      const [Technology_name, setTechnologyName] = useState("")

      //////******        Industry Data             ****** //////////
      const [Industrys, setIndustrys] = useState([
        {
          value: 1,
          label: 'IT',
        },
        {
          value: 2,
          label: 'Telecommunication',
        },
        {
          value: 3,
          label: 'Engineering',
        },
        {
          value: 4,
          label: 'Medical',
        },


      ]);
      const [selected_Industry, setSelectIndustry] = useState("")
      const [Industry_modal_visible, setIndustrysModalVisibe] = useState(false)
      const [Industry_name, setIndustryName] = useState("")


      ////// Country data

      const [countrys, setcountrys] = useState([
        {
          value: 1,
          label: 'Pakistan',
        },
        {
          value: 2,
          label: 'Iran',
        },
        {
          value: 3,
          label: 'India',
        },
        {
          value: 4,
          label: 'Afghanistan',
        },
        {
          value: 5,
          label: 'Russia',
        },
       ]);

       //// State DATa

       const [states, setstates] = useState([
        {
          value: 1,
          label: 'Panjab',
        },
        {
          value: 2,
          label: 'KPK',
        },
        {
            value: 6,
            label: 'Baloch',
          },
        {
          value: 3,
          label: 'Sindh',
        },
        {
          value: 4,
          label: 'Gilgithh',
        },
        {
          value: 5,
          label: 'Kashmir',
        },
    ]);
    const [selected_state, setSelectstate] = useState("")
    const [state_modal_visible, setstatesModalVisibe] = useState(false)
    const [state_name, setstateName] = useState("")


    const [selected_country, setSelectcountry] = useState("")
    const [country_modal_visible, setcountrysModalVisibe] = useState(false)
    const [country_name, setcountryName] = useState("")


        const [company_data, setJobData] = useState({
          job_title:"",job_title_error:"",
          website:"", website_error:"",
          socialmedia:[], social_media_error:"",
          address:"",address_error:"",
          city:"", state:"", zip:"",
          city_error:"", state_error:"", zip_error:"",
          state:"",state_error:"",
          country:"", country_error:""
        })
        const [company_name, setCompanyName] = useState("")

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
                            TextInputwidth={wp(96)}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,job_title:text })
                            }}
                            errorMessage={""}
                        />
                        <DropdownAddComponent
                            show_add_button={false}
                            width={wp(96)}
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
                            width={wp(96)}
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
                        <View style={{width:wp(96),marginLeft:scale(5), marginTop:scale(5)}} >
                              <Text style={{...textStyles.Label, color:colors.dark_primary_color}} >Mobile Number</Text>
                        </View>
                       <View style={styles.Row} >
                          <CountryModal
                              placeholder={"code"}
                              items={countires}
                              selectedItems={selected_company}
                              setSelectItems={setSelectCompany}
                              isVisible={companies_modal_visible}
                              setIsVisible={setCompaniesModalVisibe}

                          />
                          <MobileNumberInput
                              placeholder={'Mobile Number'}
                              value={company_data.job_title}
                              borderWidth={1}
                              Tex tInputwidth={wp(76)}
                              lableColor={colors.dark_primary_color}
                              borderRadius={scale(5)}
                              onChangeText={text => {
                                  setJobData({...company_data,job_title:text })
                              }}
                              errorMessage={""}
                          />
                        </View>
                        <CustomTextInput
                            placeholder={'Website url'}
                            value={company_data.website}
                            borderWidth={1}
                            TextInputwidth={wp(96)}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,website:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Address'}
                            value={company_data.address}
                            borderWidth={1}
                            TextInputwidth={wp(96)}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,address:text })
                            }}
                            errorMessage={""}
                        />

                         <CustomTextInput
                            placeholder={'City'}
                            value={company_data.city}
                            borderWidth={1}
                            TextInputwidth={wp(96)}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,city:text })
                            }}
                            errorMessage={""}
                        />
                        <CustomTextInput
                            placeholder={'Zip'}
                            value={company_data.zip}
                            borderWidth={1}
                            TextInputwidth={wp(96)}
                            lableColor={colors.dark_primary_color}
                            borderRadius={scale(5)}
                            onChangeText={text => {
                                setJobData({...company_data,zip:text })
                            }}
                            errorMessage={""}
                        />

                        <DropdownAddComponent
                            show_add_button={true}
                            width={wp(84)}
                            AddButtonPress={() => alert("company")}
                            placeholder={"country"}
                            items={countrys}
                            setItems={setcountrys}
                            selectedItems={selected_country}
                            setSelectItems={setSelectcountry}
                            isVisible={country_modal_visible}
                            setIsVisible={setcountrysModalVisibe}
                            company_name={country_name}
                            setCompanyName={setcountryName}
                        />

                      <DropdownAddComponent
                            show_add_button={true}
                            width={wp(84)}
                            AddButtonPress={() => alert("company")}
                            placeholder={"state"}
                            items={states}
                            setItems={setstates}
                            selectedItems={selected_state}
                            setSelectItems={setSelectstate}
                            isVisible={state_modal_visible}
                            setIsVisible={setstatesModalVisibe}
                            company_name={state_name}
                            setCompanyName={setstateName}
                        />



                        <DropdownAddComponent
                            AddButtonPress={() => alert("company")}
                            placeholder={"priority"}
                            items={priority}
                            setItems={setPrioritys}
                            selectedItems={selected_priority}
                            setSelectItems={setSelectPriority}
                            isVisible={priority_modal_visible}
                            setIsVisible={setPrioritysModalVisibe}
                            company_name={priority_name}
                            setCompanyName={setPriorityName}
                        />

                      <DropdownAddComponent
                            show_add_button={true}
                            width={wp(84)}
                            AddButtonPress={() => alert("company")}
                            placeholder={"technology"}
                            items={technologys}
                            setItems={setTechnologys}
                            selectedItems={selected_Technology}
                            setSelectItems={setSelectTechnology}
                            isVisible={Technology_modal_visible}
                            setIsVisible={setTechnologysModalVisibe}
                            company_name={Technology_name}
                            setCompanyName={setTechnologyName}
                        />

                        <DropdownAddComponent
                            show_add_button={true}
                            width={wp(84)}
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


const styles= StyleSheet.create({
  Row:{
    flexDirection:"row",
    borderWidth:1,
    borderColor:colors.divide_color,
    borderRadius:scale(5),
    overflow:"hidden",

    alignSelf:"center",
    width:wp(96),
    alignItems:"center",
    justifyContent:"space-between"
  }
})