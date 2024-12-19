import { View, Text,  ImageBackground, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ButtonGradient from '@/components/ui/ButtonGradient';
import useProfileStore from '@/store/useProfileStore';

export default function Step6() {
  const { setValue } = useProfileStore()
  const [medication, setMeditation] = useState<number>(0)

  const next = () =>{
    setValue(medication, 'medicine')
    router.push('/step7')
  }

  return (
    <View className='flex-1 bg-white w-full '>
      <ImageBackground source={require('@/assets/images/step6.png')} resizeMode="cover" className='h-1/5 w-full items-center pt-20'>
        {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
      </ImageBackground>
      <View className='justify-between flex-1 p-6'>
        <View>
          <View className='flex-row items-center mb-4 justify-between '>
            <Pressable onPress={() => router.navigate('/step5')}>
              <FontAwesome6 name="arrow-left-long" size={24} color="black" />
            </Pressable>
            <Link href='/step7' className='font-geo text-[16px] opacity-60'>Skip</Link>
          </View>
          <View className='flex-row items-center mb-4'>
              <Text className='font-archivo text-[52px]'>6</Text>
              <Text className='font-geo text-[16px] opacity-60'> of 9</Text>
          </View>
          <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>Are you on hormonal medication?</Text>
          <Text className='font-archivo text-[20px] w-full mb-[50px]'>including contraceptives</Text>

          <View className='flex-row flex-wrap '>
            {variants.map((item, index) =>(

              <Pressable onPress={()=> setMeditation(item.id)} key={item.label} className='flex-row justify-between w-full items-center'>
                
                <Text className={`font-geo  text-base ${medication !==item.id &&'opacity-60'}`}>{item.label}</Text>
                <View 
                  className={
                    `size-[50px] items-center justify-center  ${
                      item.id === medication 
                      ? 'border-2 rounded-full opacity-100'
                      : (item.id === 1 && medication !==2) || (item.id === 3 && medication !==4)
                      ? 'border-b opacity-60'
                      : 'opacity-60'
                      }`
                    }>
                  <Text className='font-geo text-base'>{item.id}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
        <ButtonGradient
          className='mb-10'
          title="Next" 
          icon={(<FontAwesome6 name="arrow-right-long" size={24} color="black" className='font-thin' />)}
          onPress={next}
        />
      </View>
      
    </View>
  )
}

const variants = [
  {
    id: 1,
    label: 'Yes',
  },
  {
    id: 2,
    label: 'No',
  },
  {
    id: 3,
    label: 'Previously used',
  },
  {
    id: 4,
    label: 'SpPlanning to startotting',
  },
]