import { View, Text } from 'react-native'
import React from 'react'
import LogoComponent from '../Components/LogoComponent'

const StoreInfo = () => {
  return (
    <View style={{padding:20,alignItems:"center"}}>
      <Text style={{color:"#000",fontWeight:"bold"}}>Đây là nơi hiển thị thông tin cửa hàng của bạn</Text>
      <View style={{alignItems:"center",justifyContent:"center"}}>
<LogoComponent source={require("../Assets/Images/store.png")} size={200}/>
      </View>
    </View>
  )
}

export default StoreInfo