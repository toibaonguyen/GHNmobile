import { View, Text, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import HeaderBar from '../Components/HeaderBar'
import { Button, IconButton,Avatar, Divider } from 'react-native-paper'
import UserService from "../Services/UserService"
import RNSInfo from "react-native-sensitive-info"
import { useDispatch } from 'react-redux/es/exports'
import { setChecklogin } from '../redux/actions';
import {getAllUsers} from "../Services/UserService"
import CustomButton from '../Components/CustomButton'
const Personal = () => {
  const dispatch=useDispatch()
  const [userData,setUserData]=React.useState({})
  const [isLoading,setIsLoading]=React.useState(true)
  useEffect(()=>{
    async function FetchD(){
      let id=await RNSInfo.getItem("User",{});
      await getAllUsers(id).then(
        result=>{
          console.log(result)
          setUserData(result);
        }
      )
      await setIsLoading(false)
    }
    FetchD()
  },[])
  if(isLoading){
    return null
  }
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <HeaderBar title={"Tài khoản cửa hàng"}>
        <Button icon={"logout"} textColor='cornflowerblue' 
        onPress={async()=>{
          await RNSInfo.deleteItem("User",{})
          dispatch(setChecklogin(0))
    }}
    >
          Đăng xuất
        </Button>
      </HeaderBar>
      <View style={{flexDirection:"row",marginTop:15}}>
<View style={{flex:1,alignItems:"center"}}>
  {
    userData["users"].image?(<Avatar.Image source={{uri:userData.users.image}}/>):(<Avatar.Image source={require("../Assets/Images/default-avatar.png")}/>)
  }
</View>
<View style={{flex:3}}>
  <Text style={{color:"cornflowerblue"}}>
    {userData["users"].firstName+" "+userData["users"].lastName}
  </Text>
  <Text>
    {userData["users"].email}
  </Text>
</View>

      </View>
      <Button icon={"store"} textColor='cornflowerblue' style={{alignItems:"flex-start"}} onPress={()=>{}}>Quản lý cửa hàng</Button>
      
      <Button icon={"account-cog"} textColor='cornflowerblue' style={{alignItems:"flex-start"}} onPress={()=>{}}>Phân quyền</Button>
    
      <Button icon={"credit-card"} textColor='cornflowerblue' style={{alignItems:"flex-start"}} onPress={()=>{}}>Tài khoản ngân hàng</Button>
    
      <Button icon={"account-edit"} textColor='cornflowerblue' style={{alignItems:"flex-start"}} onPress={()=>{}}>Thông tin cá nhân</Button>
    
      <Button icon={"pencil-ruler"} textColor='cornflowerblue' style={{alignItems:"flex-start"}}>Thiết lập mặc định</Button>
      <Divider/>
      <Button textColor='cornflowerblue' style={{alignItems:"flex-start"}} onPress={()=>{}}>Ghi chú mặc định</Button>
      <Button textColor='cornflowerblue' style={{alignItems:"flex-start"}} onPress={()=>{}}>Phương thức thanh toán</Button>
      <Button textColor='cornflowerblue' style={{alignItems:"flex-start"}} onPress={()=>{}}>Ghi chú thêm</Button>
      <Button textColor='cornflowerblue' style={{alignItems:"flex-start"}} onPress={()=>{}}>Vận đơn</Button>
      <Button textColor='cornflowerblue' onPress={()=>{}}>Về doanh nghiệp</Button>
      

    </View>
  )
}

export default Personal