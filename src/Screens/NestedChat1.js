import { View, Text } from 'react-native'
import React,{useState} from 'react'
import LogoComponent from "../Components/LogoComponent"

const NestedChat1 = () => {
  const [isLoading,setIsLoading]=useState(false)
  return (
    <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
      {
      /* {
        isLoading?<ActivityIndicator/>:(
        <ScrollView>
          
        </ScrollView>
        )
      } */
      }
      <LogoComponent source={require("../Assets/Images/NestedChat1.png")} size={250}/>
    </View>
  )
}

export default NestedChat1