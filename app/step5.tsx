import { View, Text,  ImageBackground, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ButtonGradient from '@/components/ui/ButtonGradient';
import useProfileStore from '@/store/useProfileStore';

export default function Step5() {
const { setValue } = useProfileStore()
const [tag, setTag] = useState('')


  const next = () =>{
    setValue(tag, 'flow')
    router.push('/step6')
  }

  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/step5.png')} resizeMode="cover" className='h-1/3 w-full items-center pt-20'>
          {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
        </ImageBackground>
          <View className='justify-between flex-1 p-6'>
            <View>
              <View className='flex-row items-center mb-4 justify-between '>
                <Pressable onPress={() => router.push('/step4')}>
                  <FontAwesome6 name="arrow-left-long" size={24} color="black" />
                </Pressable>
                <Link href='/step6' className='font-geo text-[16px] opacity-60'>Skip</Link>

              </View>
              <View className='flex-row items-center mb-4'>
                  <Text className='font-archivo text-[52px]'>5</Text>
                  <Text className='font-geo text-[16px] opacity-60'> of 9</Text>
              </View>
              <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>What is flow?</Text>
              <View className='flex-row flex-wrap gap-2.5'>
                {labels.map(item=>{
                  
                  return (
                    <Pressable onPress={()=> setTag(item)} key={item}>
                      <Text 
                        key={item}
                        className={`font-geo text-base font-semibold px-4 py-2.5 border rounded-full ${tag === item ? ' opacity-100 bg-yellow-200' : 'opacity-60'}`}
                      >{item}</Text>
                    </Pressable>
                  )
                  })}
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
const labels =[
  'Heavy',
  'Light',
  'Medium',
  'Spotting',
]