import { View, Text,  ImageBackground, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ButtonGradient from '@/components/ui/ButtonGradient';
import Calendar from '@/components/Calendar';
import useProfileStore from '@/store/useProfileStore';

export default function Step3() {
  const { setValue } = useProfileStore()
  
  const [tags, setTags] = useState<string[]>([])
  
  const next = () =>{
    setValue(tags, 'physycalEmotionalProblems')
    router.push('/step4')
  }


  const selectTag = (tag: string, isActive: boolean) => {
    isActive 
      ? setTags(tags.filter(item => item !==tag))
      : setTags([...tags, tag])

  }

  return (
    <View className='flex-1 bg-white w-full'>
      <View className='justify-between min-h-screen p-6 pt-[50px]'>
        <View>
          <View className='flex-row items-center mb-4 justify-between '>
            <Pressable onPress={() => router.navigate('/step2')}>
              <FontAwesome6 name="arrow-left-long" size={24} color="black" />
            </Pressable>
            <Link href='/step4' className='font-geo text-[16px] opacity-60'>Skip</Link>

          </View>
          <View className='flex-row items-center mb-4'>
              <Text className='font-archivo text-[52px]'>3</Text>
              <Text className='font-geo text-[16px] opacity-60'> of 9</Text>
          </View>
          <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>Physical Well-being & Emotional</Text>
          <Text className='font-archivo text-[20px] w-full mb-2'>Tag if relevalnt</Text>
          <ScrollView>
            <View className='flex-row flex-wrap gap-2.5'>
              {labels2.map(item=>{
                const isActive = tags.find(i => i===item ) ? true : false;
                return (
                  <Pressable key={item} onPress={()=> selectTag(item, isActive)}>
                    <Text 
                      key={item}
                      className={`font-geo text-base font-semibold px-4 py-2.5 border rounded-full ${isActive ? ' opacity-100 bg-yellow-200' : 'opacity-60'}`}
                    >{item}</Text>
                  </Pressable>
                )
                })}
            </View>
          </ScrollView>
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

const labels2 =[
  'Emotional eating',
  'Constipation',
  'Lack of focus or brain fog',
  'Hair loss',
  'Headache',
  'Breast tenderness',
  'Feeling bloated',
  'Bloating',
  'Hot flashes',
  'Low libido',
  'Anxiety',
  'Low energy',
  'Sleep issues',
  'VYO mood',
  'VYO weight',
  'Irritability',
  'Unbalanced appetite',
  'Overweight/Underweight',
]