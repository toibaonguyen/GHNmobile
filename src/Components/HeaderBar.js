import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const HeaderBar = ({title, children}) => {
  return (
    <View style={{padding: 15, backgroundColor: '#FFF'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'cornflowerblue',
            fontFamily: 'PTSans-Bold',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            
          }}>
            {
              children
            }
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
