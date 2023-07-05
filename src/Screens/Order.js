import {View, Text, TouchableOpacity} from 'react-native';
import React,{useEffect} from 'react';
import HeaderBar from '../Components/HeaderBar';
import SearchBarButton from '../Components/SearchBarButton';
import {Button, Divider, IconButton} from 'react-native-paper';
import HeaderBar0 from '../Components/HeaderBar0';
import { useNavigation } from '@react-navigation/native'
import RNSInfo from "react-native-sensitive-info"



const Order = () => {
  useEffect(() => {
    const fetchUser = async () => {
      let id = await RNSInfo.getItem('User', {});
      setId(id);
      console.log(id);
    };
    fetchUser();
  }, []);
  
  const [id, setId] = React.useState('');
  const navigation=useNavigation();
  const tabs = ['GHL đã lấy hàng', 'GHL chưa lấy hàng', 'ĐH nháp'];
  const [activeTab, setActiveTab] = React.useState('GHL đã lấy hàng');
  const onPressTab = tab => {
    setActiveTab(tab);
  };
  const onPressStoreInfo=()=>{
    navigation.navigate("StoreInfo");
  }
  const onNavigateToOrderInfoScreen=(data)=>{
    navigation.navigate("OrderInfo",{
      title:data.title
    });
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderBar title={'Tổng quan'}>
        {/* {pass shop here} */}
        <Button mode="contained" style={{backgroundColor: 'tomato'}} onPress={onPressStoreInfo}>
          id:{id}
        </Button>
        {/* or {bell-badge} */}
        <IconButton icon={'bell'} />
      </HeaderBar>
      <View style={{paddingHorizontal: 10}}>
        <SearchBarButton onPress={()=>{navigation.navigate("Search")}}/>
      </View>
      <HeaderBar0 onPressTab={onPressTab} tabs={tabs} activeTab={activeTab} />
      {activeTab=='GHL đã lấy hàng'&&<View
        style={{
          marginTop: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
          marginHorizontal: 10,
          borderRadius: 10,
          padding: 15,
        }}>
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Tổng đơn hàng GHN đã lấy"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Tổng đơn hàng GHN đã lấy</Text>
          <Text>{0}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Đang xử lý"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Đang xử lý</Text>
          <Text>{0}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Đang giao hàng"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Đang giao hàng</Text>
          <Text>{0}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Chờ xác nhận giao lại"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Chờ xác nhận giao lại</Text>
          <Text>{0}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Đã giao hàng và chưa ck"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Đã giao hàng và chưa ck</Text>
          <Text>{0}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Đã đối soát và ck thành công"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Đã đối soát và ck thành công</Text>
          <Text>{0}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Đang hoàn hàng"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Đang hoàn hàng</Text>
          <Text>{0}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Hoàn hàng thành công"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Hoàn hàng thành công</Text>
          <Text>{0}</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={()=>{onNavigateToOrderInfoScreen({title:"Hoàng hàng thất lạc - hư hỏng"})}} style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
          <Text>Hoàng hàng thất lạc - hư hỏng</Text>
          <Text>{0}</Text>
        </TouchableOpacity> 
        <Divider />
      </View>}
      {
        activeTab=='GHL chưa lấy hàng'&&
        <View>
          
        </View>
      }
      
      {
        activeTab=='ĐH nháp'&&
        <View>
          
        </View>
      }
    </View>
  );
};

export default Order;
