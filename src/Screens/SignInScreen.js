import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  KeyboardAwareScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LogoComponent from '../Components/LogoComponent';
import CustomTextInput from '../Components/CustomTextInput';
import CustomAsyncHandlingButton from '../Components/CustomAsyncHandlingButton';
import UserService from "../Services/UserService";
import RNSInfo from "react-native-sensitive-info";
import { useDispatch } from 'react-redux';
import {setChecklogin} from "../redux/actions";
import { useState } from 'react';
import {handleLoginApi} from "../Services/UserService";

const SignInScreen = ({route,navigation}) => {
  
  const dispatch = useDispatch();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");



  const login=async()=>{
   
      if(username==""||password==""){
        Alert.alert("Thông báo","Làm ơn nhập đầy đủ parameter")
        return
      }
 
      await handleLoginApi(username,password)
    .then(result => {


      if(result['errCode']!=0){
        Alert.alert("Thông báo: ",result['message'])
        return;
      }
      console.log("result:",result['user'].email);
     RNSInfo.setItem('User',result['user'].id.toString(),{}).then(()=>{
      dispatch(setChecklogin(1))
    })
      console.log(result['user']);
    })
    
    .catch(error => {
      Alert.alert("Lỗi",error.message)
    })

  }
  
  return (
    <ScrollView
      style={{backgroundColor: '#FFF'}}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          height: (Dimensions.get('screen').height * 1) / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
        <LogoComponent size={200} />
        <Text style={{color: 'tomato', fontWeight: 'bold', fontSize: 24}}>
          Đăng nhập
          {'\n'}
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            color: 'tomato',
            fontWeight: 'bold',
            fontSize: 22,
          }}>
          Cùng chốt thật nhiều đơn hàng nhé!
        </Text>
      </View>
      <View style={{height: Dimensions.get('screen').height / 2}}>
        <View style={{flex: 1, paddingHorizontal: 15, marginBottom: 10}}>
          <View style={{}}>
            <Text style={{color: '#000'}}>Email:</Text>
            <CustomTextInput
              placeholder={'Vui lòng nhập email'}
              onChangeText={setUsername}
            />
          </View>
          <View style={{marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#000'}}>Mật khẩu:</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("ForgetPassword")}>
                <Text
                  style={{
                    color: 'tomato',
                    fontFamily: 'PTSans-Bold',
                    fontWeight: 'bold',
                  }}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
            </View>
            <CustomTextInput
              isPasswordInput={true}
              placeholder={'Vui lòng nhập mật khẩu'}
              onChangeText={setPassword}
            />
          </View>
          {/* {Đang fix} */}
          <CustomAsyncHandlingButton
            style={{marginTop: 20}}
            text="Đăng nhập"
            onPress={login}
          />
          <View
            style={{marginTop: 20, alignSelf: 'center', flexDirection: 'row'}}>
            <Text style={{color: 'cornflowerblue', fontWeight: 'bold'}}>
              Bạn đã có tài khoản chưa?{' '}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
              <Text style={{color: 'tomato', fontWeight: 'bold'}}>
                Đăng ký ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;