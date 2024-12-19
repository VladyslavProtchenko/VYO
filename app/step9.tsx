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
  const [type, setType] = useState<number>(0)

  const next = () =>{
    setValue(type, 'goal')
    router.push('/home')
  }



const weights = Array(220).fill('')
  return (
    <View className='flex-1 bg-white w-full'>
      <ImageBackground source={require('@/assets/images/step9.png')} resizeMode="cover" className='h-1/5 w-full items-center pt-20'>
        {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
      </ImageBackground>
      <View className='flex-1 p-6 justify-between'>
        <View>
            <View className='flex-row items-center mb-4 justify-between'>
              <Pressable onPress={() => router.navigate('/step8')}>
                <FontAwesome6 name="arrow-left-long" size={24} color="black" />
              </Pressable>
              <Link href='/home' className='font-geo text-[16px] opacity-60'>Skip</Link>
            </View>

            <View className='flex-row items-center mb-4'>
                <Text className='font-archivo text-[52px]'>9</Text>
                <Text className='font-geo text-[16px] opacity-60'> of 9</Text>
            </View>
            <Text className='font-archivo text-[36px] leading-[36px] w-full mb-[50px]'>Your goal</Text>

            <View className='flex-row flex-wrap '>
              {colors.map(item =>(

                <Pressable onPress={()=> setType(item.id)} key={item.label} className='flex-row justify-between w-full items-center'>
                  <View className='flex-row items-center'>
                    <Text className={`font-geo  text-base ${type !==item.id &&'opacity-60'}`}>{item.label}</Text>
                  </View>
                  <View 
                    className={
                      `size-[50px] items-center justify-center  ${
                        item.id === type 
                        ? 'border-2 rounded-full opacity-100'
                        : (item.id === 1 && type !==2) || (item.id === 4 && type !==5) || (item.id ===2 && type ===1 ) || (item.id ===3 && type ===5)
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
          title="Get my protocol 💛" 
          icon={(<FontAwesome6 name="arrow-right-long" size={24} color="black" className='font-thin' />)}
          onPress={next}
        />
      </View>
      
    </View>
  )
}

const colors = [
  {
    id: 1,
    label: 'Overcome gynecological issues',
  },
  {
    id: 2,
    label: 'Prevent future health problems',
  },
  {
    id: 3,
    label: 'Simply track my cycle',
  },
  {
    id: 4,
    label: 'Educate and empower myself',
  },
  {
    id: 5,
    label: 'Live free from cycle-related challenges',
  },
]