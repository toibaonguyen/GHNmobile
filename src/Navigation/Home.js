import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../Screens/Homepage';
import Order from '../Screens/Order';
import Chat from '../Screens/Chat';
import Exchange from '../Screens/Exchange';
import Report from '../Screens/Report';
import Personal from '../Screens/Personal';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab=createBottomTabNavigator()

const Home = () => {

  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Homepage') {
          iconName="navicon"
            
        } else if (route.name === 'Order') {
          iconName="tag"
          
        }
        else if (route.name === 'Chat') {
          iconName="commenting"
        }
        else if (route.name === 'Exchange') {
          iconName="credit-card-alt"
        }
        else if (route.name === 'Report') {
          iconName="warning"
        }
        else if (route.name === 'Personal') {
          iconName="user-circle"
        }

        // You can return any component that you like here!
        return <FontAwesome name={iconName} size={size} color={focused?"tomato":"gray"} />;
      },
      tabBarActiveTintColor: 'cornflowerblue',
      tabBarInactiveTintColor: 'gray',
      headerShown:false
    })}>
        <Tab.Screen name="Homepage" component={Homepage} options={{title:"Trang chủ"}}/>
        <Tab.Screen name='Order' component={Order} options={{title:"Đơn hàng"}}/>
        <Tab.Screen name='Chat' component={Chat} options={{title:"Chat"}}/>
        <Tab.Screen name='Exchange' component={Exchange} options={{title:"Đổi soát"}}/>
        <Tab.Screen name='Report' component={Report} options={{title:"Khiếu nại"}}/>
        <Tab.Screen name='Personal' component={Personal} options={{title:"Cá nhân"}}/>
    </Tab.Navigator>
  )
}

export default Home