import { View, Text,TouchableOpacity } from 'react-native'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import React from 'react'

const SearchBarButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{height:45,flexDirection:"row",borderWidth:1,borderRadius:20,alignItems:"center",backgroundColor:"#D0D0D0"}}>
          <EvilIcons color={"cornflowerblue"} name="search" size={40}/>
          <Text style={{marginLeft:10}}>Tìm kiếm</Text>
        </View>
      </TouchableOpacity>
  )
}

export default SearchBarButton