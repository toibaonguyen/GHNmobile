import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import HeaderBar from '../Components/HeaderBar';
import SearchBarButton from '../Components/SearchBarButton';
import {IconButton, Button, Divider, FAB, AnimatedFAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import HeaderBar0 from '../Components/HeaderBar0';
import {getAllUsers} from '../Services/UserService';
import RNSInfo from 'react-native-sensitive-info';

const Homepage = () => {
  useEffect(() => {
    const fetchUser = async () => {
      let id = await RNSInfo.getItem('User', {});
      setId(id);
      console.log(id);
    };
    fetchUser();
  }, []);
  const navigation = useNavigation();
  const [id, setId] = React.useState('');
  const tabs = ['Báo cáo dòng tiền', 'Báo cáo vận hành'];
  const [activeTab, setActiveTab] = React.useState('Báo cáo dòng tiền');
  const onPressStoreInfo = () => {
    navigation.navigate('StoreInfo');
  };

  const onPressTab = tab => {
    setActiveTab(tab);
  };
  const onCreateOrder=()=>{
navigation.navigate("CreateOrder")
  }



  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      
      <HeaderBar title={'Tổng quan'}>
        {/* {pass shop here} */}
        <Button
          mode="contained"
          style={{backgroundColor: 'tomato'}}
          onPress={onPressStoreInfo}>
          id:
          {id}
        </Button>
        {/* or {bell-badge} */}
        <IconButton icon={'bell'} />
      </HeaderBar>
      <View style={{paddingHorizontal: 10}}>
        <SearchBarButton
          onPress={() => {
            navigation.navigate('Search');
          }}
        />
      </View>

      <ImageBackground
        style={{
          height: 100,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../Assets/Images/WelcomeLogo.jpg')}>
        <Text
          style={{
            color: '#fff',
          }}>
          Chào mừng bạn đến với GHL
        </Text>
      </ImageBackground>

      <HeaderBar0 tabs={tabs} activeTab={activeTab} onPressTab={onPressTab} />

      <ScrollView>
        {activeTab === 'Báo cáo dòng tiền' ? (
          <View style={{padding: 10}}>
            <Text style={{color: 'cornflowerblue', fontWeight: 'bold'}}>
              Báo cáo dòng tiền
            </Text>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: 'cornflowerblue',
                padding: 10,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Số dư hiện tại (GHL sắp chuyển cho khách)
              </Text>
              <TouchableOpacity>
                <Text style={{color: '#fff'}}>Tiền thu hộ (COD) ></Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#fff'}}>Giao thất bại - thu tiền ></Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#fff'}}>Phí dịch vụ tạm thu ></Text>
              </TouchableOpacity>
              <Divider style={{borderColor: '#fff'}} />
              <Text style={{color: 'cornflowerblue', fontWeight: 'bold'}}>
                Báo cáo dòng tiền
              </Text>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Số dư đang xử lý (GHL giữ lại)
              </Text>
              <TouchableOpacity>
                <Text style={{color: '#fff'}}>Số dư qua ví ></Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#fff'}}>
                  Giao thất bại - thu tiền / đang xử lý >
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#fff'}}>
                  COD hàng lưu kho / đang xử lý >
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{padding: 10}}>
            <Text style={{color: 'cornflowerblue', fontWeight: 'bold'}}>
              Báo cáo vận hành
            </Text>
            <View
              style={{
                borderTopLeftRadius: 10,
                backgroundColor: 'cornflowerblue',
                padding: 10,
                flexDirection: 'row',
                borderTopRightRadius: 10,
              }}>
              <View style={{flex: 1}}>
                <Text>Đã lấy hàng</Text>
                <Text>0 đơn</Text>
                <Text>Đã lấy hàng</Text>
                <Text>0 đơn</Text>
                <Text>Đã lấy hàng</Text>
                <Text>0 đơn</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>Đã lấy hàng</Text>
                <Text>0 đơn</Text>
                <Text>Đã lấy hàng</Text>
                <Text>0 đơn</Text>
                <Text>Đã lấy hàng</Text>
                <Text>0 đơn</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  borderBottomLeftRadius: 10,
                  backgroundColor: 'tomato',
                  padding: 10,
                  borderBottomRightRadius: 10,
                }}>
                <Text>Giao thất bại - chờ xác nhận giao lại</Text>
                <Text>0 đơn hàng</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <FAB
      onPress={onCreateOrder}
      icon={"plus"}
      color='#fff'
      style={{
        bottom: 16,
    right: 16,
    position: 'absolute',
    backgroundColor:"tomato"
      }}
      />
    </View>
  );
};

export default Homepage;
