import { View, Text,  ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ButtonRounded from '@/components/ui/ButtonRounded';
import { router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Input from '@/components/ui/Input';
import ButtonGradient from '@/components/ui/ButtonGradient';

export default function Step1() {
  const [email, setEmail] = useState('');
  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/step1.png')} resizeMode="cover" className='h-1/5 w-full items-center pt-20'>
          {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
        </ImageBackground>
        <ScrollView className='p-6'>
            <View className='flex-row items-center mb-4 justify-between pt-6'>
                <FontAwesome6 name="arrow-left-long" size={24} color="black" />
                <Text className='font-geo text-[16px] opacity-60'>Skip</Text>

            </View>
            <View className='flex-row items-center mb-4'>
                <Text className='font-archivo text-[52px]'>1</Text>
                <Text className='font-geo text-[16px] opacity-60'> of 9</Text>
            </View>
            <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>Share for better care</Text>
            <Text className='font-archivo text-[20px] w-full mb-1'>How old are you?</Text>
            <Text className='font-geo text-[12px] opacity-60 font-light mb-6'>no matter your age, we know you're always fantastic ;)</Text>
          
            <Input
              style='mb-6'
              placeholder='Year' 
              value={email}
              onChange={setEmail}
            />
              <ButtonGradient 
                title="Next" 
                icon={(<FontAwesome6 name="arrow-right-long" size={24} color="black" className='font-thin' />)}
                onPress={() => router.push('/step1')}
              />
        </ScrollView>
    </View>
  )
}