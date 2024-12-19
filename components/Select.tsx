import React, { useState } from 'react'
import {  Image, Pressable, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

interface IProps {
  title?: string;
  value: string | number | null;
  setValue: (date: any)=>void;
  className?: string;
  values: number[];
}
export default ({title = 'set date', value, setValue,values, className}: IProps) => {
  const [open, setOpen] = useState(false);

  return (
  <View className={` ${className}`}>
    <Pressable onPress={()=>setOpen(!open)} className='w-full mb-2 border-b px-2 py-2 pr-4 flex-row items-center justify-between'>
      <Text className='text-base font-geo opacity-60'>{value !== null ? value : title}</Text>
      {open 
        ? <Ionicons name="chevron-up" size={24} color="gray" />
        : <Ionicons name="chevron-down" size={24} color="gray" />
      }
      
    </Pressable>
    {open && <View className=" bg-white rounded-2xl border-[0.5px] border-gray-400">
        <Picker
            selectedValue={value}
            onValueChange={setValue}>
              {
                values.map((item,index)=>(
                  <Picker.Item key={index} label={`${index} days`} value={index} />
                ))
              }
          </Picker>
    </View>}
  </View>
  )
}