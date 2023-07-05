import { View, Text,SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import LogoComponent from '../Components/LogoComponent'
import CustomTextInput from '../Components/CustomTextInput'
import CustomAsyncHandlingButton from '../Components/CustomAsyncHandlingButton'

const ForgetPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{alignItems:"center",paddingVertical:20}}>
      <LogoComponent size={250} source={require("../Assets/Images/ForgetPassword.png")}/>
      <Text style={{marginTop:20,fontWeight:"bold",color:"tomato"}}>QUÊN MẬT KHẨU</Text>
      <Text style={{marginTop:10,fontWeight:"bold",color:"tomato"}}>GHN rất tiếc vì sự cố này và sẵn sàng hỗ trợ!</Text>
      <View style={{alignSelf:"stretch",padding:20}}>
        <Text style={{fontWeight:"bold"}}>Số điện thoại</Text>
        <CustomTextInput placeholder={"Nhập số điện thoại"}/>
        <CustomAsyncHandlingButton style={{marginTop:15}} text='Xác minh số điện thoại'/>
      </View>
      <View style={{flexDirection:"row"}}>
      <Text style={{color:"cornflowerblue"}}>quay lại trang </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("SignIn")}}>
          <Text style={{color:"tomato"}}>đăng nhập</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default ForgetPasswordScreen