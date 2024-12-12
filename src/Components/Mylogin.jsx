import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Mylogin = () => {
  return (
    <View>
      <Text className="text-2xl">welcome back !</Text>
      <TextInput 
      
      placeholder='Enter your email'
      placeholderTextColor={"red"}
      className="w-full p-10 border-4"
      />
    </View>
  )
}

export default Mylogin