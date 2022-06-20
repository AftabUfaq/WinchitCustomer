import React, { useState } from 'react';
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomTextInput from '../../components/TextInput';
import CustomButton from '../../components/Button';
import { useDispatch } from 'react-redux';
import { Login } from "../../store/actions/LoginActions";
import {GetVechiles,SelectVechiles} from "../../store/actions/vechileActions"
import { commonStyles, textStyles } from '../../styles';
import { AppScreenWidth, width } from '../../constants/sacling';
import { scale } from 'react-native-size-matters';
import { AuthRoutes } from '../../constants/routes';
import Spacer from '../../components/Spacer';
import DrawLine from '../../components/DrawLine';
import { colors } from '../../constants/theme';
import GOOGLE from '../../assets/images/google.svg';
import CustomHeader from '../../components/CustomHeader';
import FACEBOOK from '../../assets/images/facebook.svg'
import MobileNumberInput from '../../components/MobileNumberInput';
import CountryModal from '../../components/CountryModal'
import { wp } from '../../constants/sacling';
import countires from './contries.json'
import { BASEURL, ENDPOINTS } from '../../config/Config';
import { AppImages } from '../../assets/Images';
const SignInScreen = ({ navigation }) => {
  const [mobile_number, setMMobileNumber] = useState('3408906107'); // dr.aftabufaq@gmail.com
  const [country_code, setSelecCountryCode] = useState("+92")
  const [companies_modal_visible, setCompaniesModalVisibe] = useState(false)
  const [password, setPassword] = useState('hello123'); //123456
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userLogin = (data) => dispatch(Login(data))
  const setVechiles = (data) => dispatch(GetVechiles(data))
  const set_selectted_vechiles = (data) => dispatch(SelectVechiles(data))
  const SubmitLoginData = async () => {
    setPasswordErrorMessage("")
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (mobile_number === "") {
          alert("Please enter contact number!");
    } else if (password?.trim() === "") {
            alert("Please enter password!");
    } else {
      setLoading(true)
      let data = {
        phone: country_code + mobile_number,
        password: password,
        device_token: "device_token"
      };

      fetch(BASEURL + ENDPOINTS.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            response.json().then((res) => {
              if(res.verified == true || res.verified === "true"){
                getProfile(res.token)
              }else{
                setLoading(false)
                setPasswordErrorMessage("Your profile is not verified.")
              }
            })
          } else {
            setLoading(false)
            setPasswordErrorMessage("Please check username and password.")
          }
        })
        .catch((e) => {
          setPasswordErrorMessage("Please check username and password,")
          setLoading(false)
        });
    }

  };

  const getProfile = async (Token) => {
    fetch(BASEURL + ENDPOINTS.GET_PROFILE, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if(response.status === 200) {
          response.json().then(async(data) => {
            userLogin(data.user)
            setVechiles(data.vehicles)
            if(data.vehicles.length > 0){
              set_selectted_vechiles(data.vehicles[0])
            }
          })
      }else{
        setLoading(false)
        setPasswordErrorMessage("Error in getting user profile.")
      }
    }).catch((err) => {
      setLoading(false)
      setPasswordErrorMessage("Error in getting user profile.")
    })
  }

  return (
    <View style={commonStyles.container}>
      <CustomHeader
        title={"Sign In"}
      />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#fff',
          flexGrow: 1,
          alignItems: 'center',
        }}>
        <Image
          resizeMode={"contain"}
          resizeMethod={"resize"}
          style={{ width: width/2, height:width/1.2 }}
          source={AppImages.blueLogo}
        />
        <View style={{ width: wp(96), marginLeft: scale(5), marginTop: scale(5) }} >
          <Text style={{ ...textStyles.Label, color: colors.text_primary_color }} >Mobile Number</Text>
        </View>
        <View style={styles.Row} >
          <CountryModal
            placeholder={"code"}
            items={countires}
            selectedItems={country_code}
            setSelectItems={setSelecCountryCode}
            isVisible={companies_modal_visible}
            setIsVisible={setCompaniesModalVisibe}

          />
          <MobileNumberInput
            placeholder={'Mobile Number'}
            value={mobile_number}
            borderWidth={1}
            Tex tInputwidth={wp(76)}
            lableColor={colors.dark_primary_color}
            borderRadius={scale(5)}
            onChangeText={text => {
              setMMobileNumber(text)
            }}
            errorMessage={""}
          />
        </View>
        <CustomTextInput
          placeholder={'Password'}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          errorMessage={passwordErrorMessage}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(AuthRoutes.ForgotPasswordScreen)}
          style={{ width: AppScreenWidth, alignItems: 'flex-end' }}>
          <Text style={{ ...textStyles.title, color: colors.dark_primary_color }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <Spacer />
        <CustomButton
          onPress={() => SubmitLoginData()}
          loading={loading}
          text={'Login'}
          loadingText={'Processing'}
        />
        <Spacer />
        <DrawLine height={0.6} />
        <Spacer />
        <Text style={{ ...textStyles.Label, textAlign: 'center' }}>OR</Text>
        <View
          style={{
            width: AppScreenWidth,alignSelf:"center",
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.GoogleButton}>
            <GOOGLE width={scale(15)} height={scale(15)} />
            <Text
              style={{
                ...textStyles.title,
                backgroundColor: '#0000',
                marginLeft: scale(5),
                textAlign: 'center',
              }}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.GoogleButton }}>
            <FACEBOOK width={scale(25)} height={scale(25)} />
            <Text
              style={{
                ...textStyles.title,
                marginLeft: scale(5),
                textAlign: 'center',
              }}>
              Sign In With Facebook
            </Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
        <View
          style={{ width: width,position:"absolute", bottom:10, backgroundColor: '#fff' }}>
          <Text style={{ ...textStyles.disabletext, fontSize: scale(14) }}>
            Copyright @{new Date().getFullYear()} Winchit All Rights Reserved
          </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  GoogleButton: {
    flexDirection: 'row',
    width: AppScreenWidth / 2,
    borderWidth: 0,
    marginVertical: 10,
    elevation: 0,
    backgroundColor: '#fff',
    borderColor: colors.text_primary_color,
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(5),
  },
  Row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: colors.divide_color,
    borderRadius: scale(5),
    overflow: "hidden",
    alignSelf: "center",
    width: wp(96),
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default SignInScreen;
