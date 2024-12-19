import { View, Text,  ImageBackground, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ButtonGradient from '@/components/ui/ButtonGradient';
import Calendar from '@/components/Calendar';
import { Picker } from '@react-native-picker/picker';
import useProfileStore from '@/store/useProfileStore';

export default function Step8() {
  const { setValue } = useProfileStore()
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(160)

  const next = () =>{
    setValue(height, 'height')
    router.push('/step9')
  }
  return (
    <View className='flex-1 bg-white w-full'>
      <ImageBackground source={require('@/assets/images/step7.png')} resizeMode="cover" className='h-1/4 w-full items-center pt-20'>
        {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
      </ImageBackground>
      <View className='flex-1 py-6 justify-between'>
        <View>
          <View className=' px-6'>
            <View className='flex-row items-center mb-4 justify-between'>
              <Pressable onPress={() => router.navigate('/step7')}>
                <FontAwesome6 name="arrow-left-long" size={24} color="black" />
              </Pressable>
              <Link href='/step9' className='font-geo text-[16px] opacity-60'>Skip</Link>
            </View>
            <View className='flex-row items-center mb-4'>
                <Text className='font-archivo text-[52px]'>8</Text>
                <Text className='font-geo text-[16px] opacity-60'> of 9</Text>
            </View>
            <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>Height</Text>
          </View>

          <Pressable onPress={()=>setOpen(!open)} className='w-full bg-gray-100 flex-row items-end justify-center py-[6px]'>
            <Text className='font-archivo text-4xl'>{height} </Text>
            <Text className='text-[24px] opacity-60 font-thin'>cm</Text>
          </Pressable>
          {open &&<Picker
            selectedValue={height}
            onValueChange={setHeight}>
              {
                Array(220).fill('').map((_,index)=>(
                  <Picker.Item key={index} label={`${index+1} cm`} value={index+1} />
                ))
              }
          </Picker>}
        </View>
        <View className='px-6'>
          <ButtonGradient
            className='mb-10'
            title="Next" 
            icon={(<FontAwesome6 name="arrow-right-long" size={24} color="black" className='font-thin' />)}
            onPress={next}
          />
        </View>
      </View>
      
    </View>
  )
}