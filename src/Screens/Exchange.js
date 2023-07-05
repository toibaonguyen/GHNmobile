import { View, Text } from 'react-native'
import React from 'react'
import HeaderBar from '../Components/HeaderBar'
import { IconButton } from 'react-native-paper'
import SearchBarButton from '../Components/SearchBarButton'
import HeaderBar0 from '../Components/HeaderBar0'
import { useNavigation } from '@react-navigation/native'

const Exchange = () => {
  const tabs = ['Đối soát thu hộ', 'Coming soon'];
  const [activeTab, setActiveTab] = React.useState('Đối soát thu hộ');
  const navigation=useNavigation();
  const onPressTab=(tab)=>{
    return;
  }
  const onPressStoreInfo = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <HeaderBar title={"Đối soát"}>
        <IconButton icon={"bell"}/>
        
      </HeaderBar>
      <View style={{paddingHorizontal:10}}>
      <SearchBarButton onPress={onPressStoreInfo}/>
      <HeaderBar0 tabs={tabs} activeTab={activeTab} onPressTab={onPressTab}/>
      </View>
      <Text style={{color:"cornflowerblue",fontWeight:"bold", marginTop:10,marginLeft:10}}>COD của bạn sẽ được chuyển vào thứ 2,3,4,5,6 hàng tuần</Text>

    </View>
  )
}

export default Exchange