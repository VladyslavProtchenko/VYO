import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ButtonRounded from '@/components/ui/ButtonRounded';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, router } from 'expo-router';




export default function Welcome() {
  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/welcome.png')} resizeMode="cover" className='h-1/3 w-full items-center pt-20'>
          {/* <Image source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
        </ImageBackground>
        <ScrollView className='p-6'>
          <Text className='font-archivo text-[36px] leading-[36px] w-1/2 mb-1'>Reinvent Your Health</Text>
          <Text className='font-geo text-[16px]  mb-[50px] opacity-60'>Track cycle, get tips, and let's create your PERSONALIZED PROTOCOL💛</Text>
          <View className='gap-4'>
            <ButtonRounded
              title='Continue with Email' 
              icon={(<MaterialIcons name="email" size={24} color="white"/>)}
              type='black'
              onPress={() => router.push('/signup')}
              iconLeft={true}
            />
            <ButtonRounded
              title='Continue with Google' 
              icon={(<FontAwesome6 name="google" size={24} color="black" />)}
              type='white'
              onPress={() => router.push('/signup')}
              iconLeft={true}
            />
            <ButtonRounded
              title='Continue with Apple' 
              icon={(<FontAwesome name="apple" size={24} color="black" />)}
              type='white'
              onPress={() => router.push('/signup')}
              iconLeft={true}
            />
            <Link className='text-[16px] font-[500] text-center mb-6' href='/login'><Text className='opacity-60'>Have an account?</Text> <Text className='text-blue-700 underline'>Log in</Text></Link>
            <Text className='text-[12px] font-geo font-[300] text-center'>
              By continuing, you agree for YoYoMoods <Link href='/welcome' className='text-blue-700 underline'>Terms & Conditions</Link> and <Link href='/welcome' className='text-blue-700 underline'>Privacy Policy</Link>: ps, we'll never share your personal data
            </Text>
          </View>

        </ScrollView>
    </View>
  )
}