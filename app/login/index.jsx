import { Image,View, Text, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Colors from './../../constants/Colors'
import { getBackgroundColorAsync } from 'expo-system-ui'

export default function LoginScreen() {
  return (
    <View>
      <Image source={require('./../../assets/images/login.png')}
      
      style={{
        width:'100%',
        height:400
      }}
      />

      <View style={{
        padding:20,display:'flex',alignItems:'center'
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:25,textAlign:'center'
        }}>
          Ready To Make A New Friend?
        </Text>

        <Text style={{
          fontFamily:'outfit',
          fontSize:18,textAlign:'center',
          color:Colors.GRAY
        }}>
          Let's adopt the pet you like and make thier life happy again
        </Text>

        <Pressable Style={{
          padding:14,
          marginTop:100,
          backgroundColor:Colors.PRIMARY,
          width:'100%',
          borderRadius:14,
        }}>
          <Text  Style={{
            fontFamily:'outfit-medium',
            fontSize:20,textAlign:'center',
          }}>
            Get Started
          </Text>
        </Pressable>

      </View>
    </View>
  )
}