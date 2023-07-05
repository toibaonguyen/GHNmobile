import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HeaderBar from '../Components/HeaderBar'
import HeaderTab from '../Components/HeaderTab'
import { NavigationContainer } from '@react-navigation/native';
import NestedChat from './NestedChat';
import NestedChat1 from './NestedChat1';


const Chat = () => {

  const [nestedchat,setNestedchat]=useState(0)
  const movetoNestedchat=()=>{
    setNestedchat(0)
  }
  const movetoNestedchat1=()=>{
    setNestedchat(1)
  }
  return (
    <View style={{backgroundColor:"#fff",flex:1}}>
      <HeaderBar title={"Chat với CSKH"}/>
      <HeaderTab onPress={movetoNestedchat} onPress1={movetoNestedchat1}/>
      <View style={{flex:1,marginHorizontal:10,marginTop:10}}>
        {
          nestedchat===1?<NestedChat1/>:<NestedChat/>
        }
      </View>
    </View>
  )
}

export default Chat