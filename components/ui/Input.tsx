import { TextInput,TouchableOpacity,View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


interface IProps {
    value: string;
    onChange: (value: string) => void;
    onBlur?: (data: any) => void;
    isPassword?: boolean;
    style?: any;
    placeholder?: string;
    isPasswordConfirm?: boolean;
}
export default function Input({
  value, 
  onChange,
  onBlur, 
  isPassword, 
  style, 
  placeholder = 'Type here',
  isPasswordConfirm = true,
}: IProps) {
  const [show, setShow] = useState(!isPassword);
  return (
    <View className='relative w-full flex-row'>
        <TextInput
          autoCapitalize="none"
          className={`w-full border-b border-gray-400 font-geo text-[16px] px-3 py-2.5 ${style} ${isPasswordConfirm? '' : 'border-red-500 text-red-500'}`}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={!show}
          onBlur={onBlur}
        />
        <TouchableOpacity onPress={()=>setShow(!show)}>
        {isPassword ?<Ionicons
          name={show ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          className='absolute bottom-1/2 translate-y-1/2 right-4'
          color={isPasswordConfirm ? 'gray': 'red'}
        />: null}
      </TouchableOpacity>
    </View>
  )
}