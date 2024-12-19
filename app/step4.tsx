import { View, Text,  ImageBackground, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ButtonGradient from '@/components/ui/ButtonGradient';
import Calendar from '@/components/Calendar';
import useProfileStore from '@/store/useProfileStore';

export default function Step4() {
  const { setValue } = useProfileStore()
  const [type, setType] = useState<number>(0)

    const next = () =>{
      setValue(type, 'periodColor')
      router.push('/step5')
    }


  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/step4.png')} resizeMode="cover" className='h-1/5 w-full items-center pt-20'>
          {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
        </ImageBackground>
        <ScrollView className='p-6' contentContainerStyle={{justifyContent: 'space-between',flexGrow: 1}}>
          <View className='justify-between' >
            <View className='flex-row items-center mb-4 justify-between '>
              <Pressable onPress={() => router.navigate('/step3')}>
                <FontAwesome6 name="arrow-left-long" size={24} color="black" />
              </Pressable>
              <Link href='/step5' className='font-geo text-[16px] opacity-60'>Skip</Link>

            </View>
            <View className='flex-row items-center mb-4'>
                <Text className='font-archivo text-[52px]'>4</Text>
                <Text className='font-geo text-[16px] opacity-60'> of 9</Text>
            </View>
            <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>What color is your period?</Text>
            <View className='flex-row flex-wrap '>
              {colors.map(item =>(

                <Pressable onPress={()=> setType(item.id)} key={item.label} className='flex-row justify-between w-full items-center'>
                  <View className='flex-row items-center'>
                    <View style={{
                      backgroundColor: item.color
                    }} className={`size-2.5 rounded-full mr-[6px]`}/>
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
            title="Next" 
            icon={(<FontAwesome6 name="arrow-right-long" size={24} color="black" className='font-thin' />)}
            onPress={next}
          />

        </ScrollView>
    </View>
  )
}
const colors = [
  {
    id: 1,
    label: 'Bright red',
    color: '#740000',
  },
  {
    id: 2,
    label: 'Cherry',
    color: '#9C0000',
  },
  {
    id: 3,
    label: 'Pink',
    color: '#e68282',
  },
  {
    id: 4,
    label: 'Orange',
    color: '#A56642',
  },
  {
    id: 5,
    label: 'Gray',
    color: '#716060',
  },
]