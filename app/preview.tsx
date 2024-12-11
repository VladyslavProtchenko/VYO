import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Steps from '@/components/ui/Steps';
import ButtonGradient from '@/components/ui/ButtonGradient';




export default function Login() {

  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/preview.png')} resizeMode="cover" className='h-full w-full items-center pt-40'>
          {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px] mb-20' /> */}
          {/* <Steps isWhite={true} /> */}
          <View className='p-6 w-full justify-between flex-1'>
            <View>
              <Text className='font-archivo text-white text-[36px] leading-[36px] w-full mb-4'>VYO</Text>
              <Text className='font-archivo text-white text-[20px] w-2/3 '>help women rewrite their <Text className='text-[#ecf7b5] line-through'>health</Text> life 💛</Text>
            </View>


            <View className='mt-auto mb-[50px]'>
              <Text className='font-archivo text-white text-[20px] w-2/3'>Victoria, 28</Text>
              <Text className='text-white font-geo opacity-60 mb-1'>Inclusive model, mentor</Text>

              <View className='flex-row gap-2 mb-6'>
                {[1,2,3,4,5].map(i =><Image key={i} source={require('@/assets/images/Star.png')} className='size-6' />)}
              </View>
              <Text className='font-geo text-white text-[16px] mb-2 '>Heavy period pain often kept me in bed for days stealing my time and energy.</Text>
              <Text className='font-geo text-white text-[12px] font-thin opacity-60 mb-[50px]'>With these protocols, I’m rewriting my story—healing a little more every day and reclaiming my life.</Text>

              <ButtonGradient 
                title="Next" 
                icon={(<FontAwesome6 name="arrow-right-long" size={24} color="black" className='font-thin' />)}
                onPress={() => router.push('/step1')}
              />
            </View>
          </View>
        </ImageBackground>
    </View>
  )
}