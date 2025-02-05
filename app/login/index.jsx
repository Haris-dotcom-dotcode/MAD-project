import { Image,View, Text, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Colors from './../../constants/Colors'
import { getBackgroundColorAsync } from 'expo-system-ui'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {

  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      // If sign in was successful, set the active session
      if (createdSessionId) {
        
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }, [])

  return (
    <View style={{
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <Image source={require('./../../assets/images/login.png')}
      
      style={{
        width:'100%',
        height:500
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







        <Pressable 
        onPress={onPress}
        Style={{
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