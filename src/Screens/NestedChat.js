import { View, Text, ActivityIndicator,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import LogoComponent from '../Components/LogoComponent'

const NestedChat = () => {
  const [isLoading,setIsLoading]=useState(false)
  
  return (
    <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
      {/* {
        isLoading?<ActivityIndicator/>:(
        <ScrollView>
          
        </ScrollView>
        )
      } */}
      <LogoComponent source={require("../Assets/Images/NestedChat.png")} size={250}/>
    </View>
  )
}

export default NestedChat