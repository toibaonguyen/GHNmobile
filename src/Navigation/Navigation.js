import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen';
import Home from './Home';
import UserService from '../Services/UserService';
import SplashScreen from '../Screens/SplashScreen';
import RNSInfo from 'react-native-sensitive-info';
import { Provider,useSelector } from 'react-redux';
import store from '../redux/store';
import SearchScreen from '../Screens/SearchScreen';
import StoreInfo from '../Screens/StoreInfo';
import OrderInfoScreen from '../Screens/OrderInfoScreen';
import CreateOrder from '../Screens/CreateOrder';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="StoreInfo"
        component={StoreInfo}
        options={{headerTitle:"Cửa hàng"}}
      />
      <Stack.Screen
        name="OrderInfo"
        component={OrderInfoScreen}
        options={{headerShown: false}}
      /><Stack.Screen
      name="CreateOrder"
      component={CreateOrder}
      options={{headerTitle:"Tạo đơn hàng"}}
    />
      
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const [state, setState] = useState({UserToken:null,isLoading:true});
  const check = useSelector((state) => state.check);

  useEffect(() => {
    const checkLogin = async () => {
      // await RNSInfo.deleteItem("User",{});
      let check = await RNSInfo.getItem('User', {})
      if(check){
        console.log("áoịdaoí");
        console.log("Resulttt12: ",check);
        setState({UserToken:check,isLoading:false})
      }
      else{
        setState({UserToken:null,isLoading:false})
      }
      
        
      return 
    }
    checkLogin()
  },[check]);



  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {state.UserToken == null ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainApp" component={App} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
