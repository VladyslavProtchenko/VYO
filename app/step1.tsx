import { View, Text,  ImageBackground, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ButtonGradient from '@/components/ui/ButtonGradient';
import Calendar from '@/components/Calendar';
import Select from '@/components/Select';
import useProfileStore from '@/store/useProfileStore';
import dayjs from 'dayjs';

export default function Step1() {
  const { setValue } = useProfileStore()
  const [birthDate, setBirthDate] = useState(null);
  const [menstruationDate, setMenstruationDate] = useState(null);
  const [menstrDuration, setMenstrDuration] = useState(5);
  const [cycleDuration, setCycleDuration] = useState(28);


  const next = () => {
    setValue(dayjs(birthDate).format('DD, MMMM YYYY') || '', 'birthDate')
    setValue(dayjs(menstruationDate).format('DD MMMM, YYYY') || '','startMenstruation')
    setValue(menstrDuration,'menstruatioDuration')
    setValue(cycleDuration,'cycleDuration')
    router.push('/step2')
  }

  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/step1.png')} resizeMode="cover" className='h-1/5 w-full items-center pt-20'>
          {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
        </ImageBackground>
        <ScrollView className='p-6 pb-10'>
          <View className='flex-row items-center mb-4 justify-between pt-6'>
            <Pressable onPress={() => router.push('/preview')}>
              <FontAwesome6 name="arrow-left-long" size={24} color="black" />
            </Pressable>
            <Link href='/step2' className='font-geo text-[16px] opacity-60'>Skip</Link>

          </View>
          <View className='flex-row items-center mb-4'>
              <Text className='font-archivo text-[52px]'>1</Text>
              <Text className='font-geo text-[16px] opacity-60'> of 9</Text>
          </View>
          <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>Share for better care</Text>
          <Text className='font-archivo text-[20px] w-full mb-1'>How old are you?</Text>
          <Text className='font-geo text-[12px] opacity-60 font-light mb-6'>no matter your age, we know you're always fantastic ;)</Text>
          
          <Calendar
            className='mb-6'
            value={birthDate} 
            setValue={setBirthDate} 
            title="Year"
          />
          <Text className='font-archivo text-[20px] w-full mb-6'>Your cycle</Text>
          <Calendar
            className='mb-6'
            value={menstruationDate} 
            setValue={setMenstruationDate} 
            title="Start of last menstruation"
          />
          <Text className=''>Menstruation duration</Text>
          <Select
            className='mb-6'
            value={menstrDuration} 
            setValue={setMenstrDuration} 
            values={Array(16).fill('')}
          />
          <Text className=''>Cycle duration</Text>
          <Select
            className='mb-10'
            value={cycleDuration} 
            setValue={setCycleDuration} 
            values={Array(51).fill('')}
          />
          <ButtonGradient 

            title="Next" 
            className='mb-[50px]'
            icon={(<FontAwesome6 name="arrow-right-long" size={24} color="black" className='font-thin' />)}
            onPress={next}
          />
        </ScrollView>
    </View>
  )
}