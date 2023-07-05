import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground
        source={require('../Assets/Images/backgroundImageLogin.png')}
        style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 50,
              fontFamily: 'DancingScript-Bold',
            }}>
            Welcome
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color={'#fff'} size={50} />
        </View>
        <View style={{flex: 1}}></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;
