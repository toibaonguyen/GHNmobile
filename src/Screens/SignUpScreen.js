import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  
} from 'react-native';
import React, {Component, useEffect, useReducer, useState} from 'react';
import LogoComponent from '../Components/LogoComponent';
import CustomTextInput from '../Components/CustomTextInput';
import CustomAsyncHandlingButton from '../Components/CustomAsyncHandlingButton';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';


import { getAllProvinceService, getAllDistrictService, getProvinceByDistrict } from '../Services/UserService';


const SignUpScreen = ({navigation}) => {
  const [visibleModal, setVisibleModal] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('G1');
  const [role, setRole] = useState('R5');
  const [rePassword, setRePassword] = useState('');
  const [provinceId, setProvinceId] = useState(null);
  const [provinceandDictrictList,setprovinceandDictrictList]=useState([]);
  const [OPEN1,setOPEN1]=useState(false);
  const [OPEN2,setOPEN2]=useState(false);

  const {provinces,dictricts}=provinceandDictrictList


  getAllProvince = async () => {
    let response = await getAllProvinceService();
  
    if (response && response.errCode === 0) {
      setProvinceList(response.data);
    }
}
useEffect(()=>{
  getAllProvince = async () => {
  let response = await getAllProvinceService();
  let response1 = await getAllDistrictService();
  if (response && response.errCode === 0) {
    let u=response.data
    console.log(u);
    const arr=[];
    u.forEach(element => {
      const targetObject = Object.assign({}, { label: element.name, value: element.id });
      arr.push(targetObject);
    }
    );
    setprovinceandDictrictList({provinces:arr,dictricts:arr});
  }
}
  getAllProvince();
},[])
  const onSignUp=async()=>{
    if(password!==rePassword){
      Alert.alert("Lỗi","Mật khẫu của 2 cái không trùng nhau")
    }
     
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{paddingHorizontal: 15, paddingVertical: 20}}>
        <Modal>
          <ScrollView>

          </ScrollView>
        </Modal>
        <Modal>
          <ScrollView>

          </ScrollView>
        </Modal>
        <Modal>
          <View style={{}}>

          </View>
        </Modal>
        <LogoComponent
          size={250}
          style={{alignSelf: 'center', marginTop: 20}}
          source={require('../Assets/Images/SignUpImage.png')}
        />
        <Text
          style={{
            color: 'tomato',
            fontWeight: 'bold',
            fontSize: 30,
            alignSelf: 'center',
            marginTop: 30,
          }}>
          Đăng ký
        </Text>
        
        {/* <Text style={style.textTitle}>Chọn Tỉnh/Thành phố</Text>
        <TouchableOpacity><Text>123</Text></TouchableOpacity>
        <Text style={style.textTitle}>Chọn Huyện</Text>
        <TouchableOpacity><Text>123123</Text></TouchableOpacity>
        <Text style={style.textTitle}>Giới tính</Text>
        <TouchableOpacity><Text>123123</Text></TouchableOpacity>
       */}
        
        <Text style={style.textTitle}>Họ</Text>
        <CustomTextInput placeholder={'Nhập họ'} onChangeText={setLastName}/>
        <Text style={style.textTitle}>Tên</Text>
        <CustomTextInput placeholder={'Nhập tên'} onChangeText={setFirstName}/>
        <Text style={style.textTitle}>Số điện thoại</Text>
        <CustomTextInput placeholder={'Nhập số điện thoại'} onChangeText={setPhoneNumber}/>
        <Text style={style.textTitle}>Email</Text>
        <CustomTextInput placeholder={'Nhập email'} onChangeText={setEmail}/>
        <Text style={style.textTitle}>Mật khẩu</Text>
        <CustomTextInput
          placeholder={'Tối thiểu 8 ký tự bao gồm chữ cái và số'}
          isPasswordInput
          onChangeText={setPassword}
        />
        <Text style={style.textTitle}>Nhập lại mật khẩu</Text>
        <CustomTextInput placeholder={'Nhập lại mật khẩu'} isPasswordInput onChangeText={setRePassword}/>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text
            style={[{display: 'flex', textAlign: 'center'}, style.textnote]}>
            Bằng việc nhấn nút "Đăng ký", bạn đồng ý
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={style.ButtonLink}>với Điều khoản dịch vụ</Text>
            </TouchableOpacity>
            <Text style={style.textnote}> và </Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={style.ButtonLink}>
                với Quy định Riêng tư Cá nhân
              </Text>
            </TouchableOpacity>
            <Text style={style.textnote}>của chúng tôi</Text>
          </View>
        </View>
        <CustomAsyncHandlingButton text="Đăng ký" style={{marginTop: 10}} />
        <View
          style={{
            alignItems: 'center',
            marginTop: 15,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Text style={style.textnote}>Bạn có tài khoản rồi? </Text>
          <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.navigate("SignIn")}}>
            <Text style={style.ButtonLink}>Đăng nhập ngay</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  ButtonLink: {
    color: 'tomato',
    fontWeight: 'bold',
  },
  textnote: {
    color: 'cornflowerblue',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
