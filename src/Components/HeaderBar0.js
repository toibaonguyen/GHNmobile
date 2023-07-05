import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HeaderBar0 = ({ activeTab, tabs, onPressTab }) => {
  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab ? styles.activeTab : null,
          ]}
          onPress={() => onPressTab(tab)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab ? styles.activeTabText : null,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    height: 50,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#666666',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#ff0000',
  },
  activeTabText: {
    color: '#ff0000',
  },
});

export default HeaderBar0;
