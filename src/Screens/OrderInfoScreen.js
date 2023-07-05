import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const OrderInfoScreen = ({route, navigation}) => {
    const {title,quantity,orders}=route.params
  return (
    <View style={{padding:10}}>
      <Text style={{fontWeight:"bold",color:"tomato",alignSelf:"center"}}>
        {title}
      </Text>
      <Text style={{fontWeight:"bold",color:"cornflowerblue",alignSelf:"center"}}>
        {quantity? quantity:0 + " đơn"} 
      </Text>
      <TextInput placeholder='Lọc đơn hàng trong danh sách' style={{marginTop:10,borderRadius:15}} activeOutlineColor='cornflowerblue' mode="outlined" />
    </View>
  )
}

export default OrderInfoScreen