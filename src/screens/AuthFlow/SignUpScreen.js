import React, {useState} from 'react';
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
import {useDispatch} from 'react-redux';
import { Login } from "../../store/actions/LoginActions";
import {commonStyles, textStyles} from '../../styles';
import {AppScreenWidth, width} from '../../constants/sacling';
import {scale} from 'react-native-size-matters';
import {AuthRoutes} from '../../constants/routes';
import Spacer from '../../components/Spacer';
import DrawLine from '../../components/DrawLine';
import {colors} from '../../constants/theme';
import GOOGLE from '../../assets/images/google.svg';
import CustomHeader from '../../components/CustomHeader';
import FACEBOOK from '../../assets/images/facebook.svg'
import MobileNumberInput from '../../components/MobileNumberInput';
import CountryModal from '../../components/CountryModal'
import { wp } from '../../constants/sacling';
import countires from './contries.json'
import { BASEURL, ENDPOINTS } from '../../config/Config';
const SignInScreen = ({navigation}) => {
  const [mobile_number, setMMobileNumber] = useState('3408906107'); // dr.aftabufaq@gmail.com
  const [country_code, setSelecCountryCode] = useState("Pakistan")
  const [companies_modal_visible, setCompaniesModalVisibe] = useState(false)
  const [password, setPassword] = useState('hello123'); //123456
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const  userLogin = (data) => dispatch(Login(data))
  const SubmitLoginData = async () => {

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
        device_token:"device_token"
      };

      fetch(BASEURL + ENDPOINTS.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
            console.log(response.status);
          if (response.status === 200) {

          } else {
          }
        })
        .catch((e) => {
          console.log("login-error", e);
          this.setState({
            loading: false,
          });
        });
    }

  };
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
          resizeMode={'cover'}
          resizeMethod={'resize'}
          style={{width: width}}
          source={require('../../assets/images/login.png')}
        />
          <View style={{width:wp(96),marginLeft:scale(5), marginTop:scale(5)}} >
                              <Text style={{...textStyles.Label, color:colors.text_primary_color}} >Mobile Number</Text>
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
          style={{width: AppScreenWidth, alignItems: 'flex-end'}}>
          <Text style={{...textStyles.title, color:colors.dark_primary_color}}>
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
        <Text style={{...textStyles.Label, textAlign: 'center'}}>OR</Text>
        <View
          style={{
            width: AppScreenWidth,
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
          <TouchableOpacity style={{...styles.GoogleButton}}>
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

        <View
          style={{width: width, paddingBottom: 10, backgroundColor: '#fff'}}>
          <Text style={{...textStyles.disabletext, fontSize:scale(11)}}>
            Copyright @{new Date().getFullYear()} Winchit All Rights Reserved
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  GoogleButton: {
    flexDirection: 'row',
    width: AppScreenWidth / 2 - scale(10),
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
  Row:{
    flexDirection:"row",
    borderBottomWidth:1,
    borderColor:colors.divide_color,
    borderRadius:scale(5),
    overflow:"hidden",
    alignSelf:"center",
    width:wp(96),
    alignItems:"center",
    justifyContent:"space-between"
  }
});

export default SignInScreen;
