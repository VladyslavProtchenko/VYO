import { View, Text,  ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ButtonRounded from '@/components/ui/ButtonRounded';
import { router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Input from '@/components/ui/Input';

export default function ResetPassEmail() {
  const [email, setEmail] = useState('');
  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/resetPass.png')} resizeMode="cover" className='h-1/4 w-full items-center pt-20'>
          {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
        </ImageBackground>
        <ScrollView className='p-6'>
          <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>Reset password</Text>
          
            <Input
              style='mb-6'
              placeholder='Email' 
              value={email}
              onChange={setEmail}
            />
            <ButtonRounded
              title='Send'
              icon={(<FontAwesome6 name="arrow-right-long" size={24} color="white" />)}
              type='black'
              onPress={() => router.push('/reset_pass')}
              iconLeft={false}
            />
        </ScrollView>
    </View>
  )
}