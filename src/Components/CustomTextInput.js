import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
const CustomTextInput = ({
  placeholder,
  isPasswordInput = false,
  value,
  onChangeText,
  borderColor="gray"
}) => {
  const [hintPassword, setHintPassword] = useState(true);
  const [bc,setbc]=useState(borderColor)
  
  return isPasswordInput ? (
    <View
      style={[
        {
          flexDirection: 'row-reverse',
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: 15,
          alignItems: 'center',
          borderColor:bc
        }
      ]}>
      <TouchableOpacity
        onPress={() => {
          setHintPassword(!hintPassword);
        }}>
        {hintPassword ? (
          <Entypo name="eye-with-line" size={20} />
        ) : (
          <Entypo name="eye" size={20} />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder={placeholder}
        style={{flex: 1, fontSize: 17}}
        secureTextEntry={hintPassword}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  ) : (
    <View
      style={[
        {
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: 15,
          borderColor:bc
        }
      ]}>
      <TextInput
        placeholder={placeholder}
        style={{flex: 1, fontSize: 17}}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;
