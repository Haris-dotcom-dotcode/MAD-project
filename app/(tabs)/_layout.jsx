import { View, Text } from 'react-native'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='home'/>
        <Tabs.Screen name='favorite'/>
        <Tabs.Screen name='inbox'/>
        <Tabs.Screen name='profile'/>
    </Tabs>
  )
}