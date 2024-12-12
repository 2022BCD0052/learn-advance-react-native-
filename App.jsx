import { View, Text } from 'react-native'
import React from 'react'
import One from './src/Components/One'
import Mylogin from './src/Components/Mylogin'

const App = () => {
  return (
    <View>
      <Text className="text-2xl">App</Text>
      <Mylogin/>
      {/* <One/> */}
      
    </View>
  )
}

export default App