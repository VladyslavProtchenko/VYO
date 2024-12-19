import React, { useState } from 'react'
import {  Image, Pressable, Text, View } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import Ionicons from '@expo/vector-icons/Ionicons';
interface IProps {
  title?: string;
  value: string | null;
  setValue: (date: any)=>void;
  className?: string;
}
export default ({title = 'set date', value, setValue, className}: IProps) => {
  const [open, setOpen] = useState(false);

  return (
      <View className={className}>
            <Pressable onPress={()=>setOpen(!open)} className='w-full mb-2 border-b px-2 flex-row items-center justify-between'>
              <Text className='text-base font-geo opacity-60'>{value !== null ? dayjs(value).format('DD MMMM YYYY') : title}</Text>
              {open 
                ?<Ionicons name="close-outline" size={35} color="gray" />
                :<Image source={require('@/assets/images/icons/calendar.png')} className='size-10' />
              }
              
            </Pressable>
            {open && <View className="bg-white rounded-2xl p-4 border-[0.5px] border-gray-400">
              <DateTimePicker
                mode="single"
                date={value? value :dayjs()}
                onChange={(params) => setValue(params.date)}
                maxDate={dayjs()}
                calendarTextStyle={{fontSize: 20,fontFamily: "Geologica", opacity: .8}}
                selectedTextStyle={{fontSize: 20, fontWeight: 600, fontFamily: "Geologica"}}
                selectedItemColor='#FF3B30'
                headerButtonColor='#FF3B30'
                headerButtonsPosition='right'
                dayContainerStyle={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </View>}
      </View>
  )
}