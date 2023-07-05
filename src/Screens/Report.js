import { View, Text,Linking } from 'react-native'
import React from 'react'
import HeaderBar from '../Components/HeaderBar'
import { Button } from 'react-native-paper'
import LogoComponent from '../Components/LogoComponent'

const Report = () => {
  const [phone,setPhone]=React.useState("0919457117")
  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
      <HeaderBar title={"Khiếu nại"}>
        <Button mode="contained" icon={"bell"} buttonColor="tomato" onPress={()=>{
Linking.openURL(`tel:${phone}`)
        }}>
Gọi tổng đài ngay
        </Button>
      </HeaderBar>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <LogoComponent source={require("../Assets/Images/speech-bubble.png")} size={300}/>
      </View>
    </View>
  )
}

export default Report