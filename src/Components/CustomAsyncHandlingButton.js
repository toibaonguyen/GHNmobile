import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useRef, useState,memo} from 'react';






const CustomAsyncHandlingButton = ({
  onPress,
  backgroundColor = 'gray',
  contentColor = '#fff',
  text = '',
  style
}) => {
  const [isHandling, setIsHandling] = useState(false);

  useEffect(()=>{
  },[isHandling])


  const handle = async () => {
    
    await setIsHandling(true);
    const handl=new Promise(async(resove,reject)=>{
      try{
        console.log(1111)
        await onPress()
        resove()
      }
      catch(e){
        reject(e)
      }
    })



    .then(()=>{
      setIsHandling(false);
    })
    .catch((e)=>{
      console.log(e);
      setIsHandling(false);
    })
  };
  return (
    <TouchableOpacity
    disabled={isHandling}
      activeOpacity={0.8}
      onPress={handle}
      style={[style,{
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        padding: 15,
        borderRadius: 15
      }]}>
      {isHandling ? (
        <ActivityIndicator color={contentColor} />
      ) : (
        <Text style={{color: contentColor}}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomAsyncHandlingButton ;
