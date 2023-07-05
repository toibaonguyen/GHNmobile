import { View, Text,Image } from 'react-native'
import React from 'react'

const LogoComponent = ({source=require("../Assets/Images/Logo.png"),size=30,style}) => {
  return (
    <>
      <Image source={source} style={[{height:size,width:size},style]}/>
    </>
  )
}

export default LogoComponent