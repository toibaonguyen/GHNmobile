import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'



const HeaderTab = ({onPress,onPress1}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabPress = async(index) => {
      await onPress();
      setActiveTab(index);
    };
    const handleTabPress1 = async(index) => {
      await onPress1();
      setActiveTab(index);
    };
  
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 0 && styles.activeTabItem]}
          onPress={() => handleTabPress(0)}
        >
          <Text style={[styles.tabText,activeTab===0 && styles.activetabText]}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 1 && styles.activeTabItem]}
          onPress={() => handleTabPress1(1)}
        >
          <Text style={[styles.tabText,activeTab===1 && styles.activetabText]}>GHN inbox</Text>
        </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginHorizontal:20,
      backgroundColor:"#D0D0D0",
      borderRadius:10
    },
    tabItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
      borderRadius:10,
      height:40
    },
    activeTabItem: {backgroundColor:"tomato"
    },
    tabText: {
      fontSize: 16,
      fontWeight:"bold",
      color:"cornflowerblue"
    },
    activetabText: {
        color:"white"
    },
  });
export default HeaderTab