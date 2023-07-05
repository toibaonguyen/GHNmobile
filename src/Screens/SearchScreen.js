import { View, Text } from 'react-native'
import React,{useState} from 'react'
import {Searchbar} from "react-native-paper"

const SearchScreen = () => {
    const [value,setValue]=useState("")
  return (
    <View>
      <Searchbar style={{marginTop:10}} placeholder='Nhập SĐT - Mã đơn hàng - Tên người nhận' value={value} onChangeText={setValue}/>

    </View>
  )
}

export default SearchScreen