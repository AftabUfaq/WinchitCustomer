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
import {AppScreenWidth, hp, width} from '../../constants/sacling';
import {scale} from 'react-native-size-matters';
import {AuthRoutes, MainRoutes} from '../../constants/routes';
import Spacer from '../../components/Spacer';
import DrawLine from '../../components/DrawLine';
import {colors} from '../../constants/theme';
import GOOGLE from '../../assets/images/google.svg';
import CustomHeader from '../../components/CustomHeader';
import MICROSOFT from '../../assets/images/microsoft.svg';
import { candidateLogin } from '../../api';
import { AppImages } from "../../assets/Images";
const SignInScreen = ({navigation}) => {
  const [email_address, setUseremail] = useState('+923408906107'); // dr.aftabufaq@gmail.com
  const [UseremailErrorMesage, setUseremailErrorMessaage] = useState('');
  const [password, setPassword] = useState('hello123'); //123456
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const  userLogin = (data) => dispatch(Login(data))
  const submitdate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!reg.test(email_address)) {
      setUseremailErrorMessaage('Please enter valid email');
      setPasswordErrorMessage('');
      return;
    }
    if (password.trim().length < 4) {
      setUseremailErrorMessaage('');
      setPasswordErrorMessage('Please enter password at least 4 characters');
      return;
    }
    setLoading(true);
    setPasswordErrorMessage('');
    setUseremailErrorMessaage('');
    let data ={
      email_address:email_address,
      userpassword:password,
      type:"candidate"
    }
    candidateLogin(data).then((response) => {
      setLoading(false);
        if(response.status == 200){
          if(response.data.status){
            userLogin(response.data)
          }else{
            alert("Invalid crenditlas")
          }
        }else{
          alert("error")
        }
    }).catch((err) => {
      setLoading(false);
      console.log(err);
    })
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
          resizeMode={"contain"}
          resizeMethod={'resize'}
          style={{width: width/2, height:hp(40)}}
          source={AppImages.blueLogo}
        />
        <CustomTextInput
          placeholder={'Mobile Number'}
          value={email_address}
          onChangeText={text => setUseremail(text)}
          errorMessage={UseremailErrorMesage}
        />
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
          <Text style={{...textStyles.title, color:colors.default_primary_color}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <Spacer />
        <CustomButton
          onPress={() => submitdate()}
          loading={loading}
          text={'Login'}
          loadingText={'Processing'}
        />
        <Spacer />
        <DrawLine height={0.6} />
        <Spacer />
         <Text style={{...textStyles.Label, textAlign: 'center'}}>OR</Text>
         <DrawLine height={0.6} />
         <Spacer />
         <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.SignUpScreen) } >
            <Text style={{...textStyles.Label, color:colors.default_primary_color}}>Create a new account?</Text>
         </TouchableOpacity>
         <Spacer />
         <DrawLine height={0.6} />
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
              <Image
                  source={AppImages.fb_btn}
                  style={{width:scale(15),height:scale(15)}}
                  resizeMode={"contain"}
              />
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
          style={{width: width,position:"absolute", bottom:0, paddingBottom: 10, backgroundColor: '#fff'}}>
          <Text style={textStyles.disabletext}>
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
});

export default SignInScreen;
