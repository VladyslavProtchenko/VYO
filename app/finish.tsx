import {  SafeAreaView, ScrollView, Text, View } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

import useProfileStore from '@/store/useProfileStore';

export default function HomeScreen() {
  const {
    name,
    email,
    birthDate,
    startMenstruation,
    menstruatioDuration,
    cycleDuration,
    cycleIssues,
    physycalEmotionalProblems,
    periodColor,
    flow,
    medicine,
    weight,
    height,
    goal,
  } =  useProfileStore()

  const myGoals = [ 'Overcome gynecological issues', 'Prevent future health problems', 'Simply track my cycle', 'Educate and empower myself', 'Live free from cycle-related challenges' ]
  const periodColors = ['Bright red','Cherry','Pink','Orange','Gray']
  const isMedicine = ['Yes','No','Previously used','SpPlanning to startotting']
  return (
          <SafeAreaView className='bg-white'>
            <ScrollView className='py-6 px-4'>
              <View className='flex-row gap-1.5 mb-4'>
                <View  className='bg-red-400 rounded-l-full rounded-br-full size-5' />
                <Text className='title'>Today’s Your day, {name}</Text>
              </View>
              <View className='flex-row mb-6'>
                <View
                  className='bg-white rounded-3xl p-2.5 gap-4 '
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 5,
                  }}
                >
                  <View className='flex-row gap-2'>

                    <View className='items-center gap-1'>
                      <Text className='text-[10px] opacity-60'>Mo 15</Text>
                      <View className='bg-red-400 p-[2px] size-[30px] rounded-full'>
                        <View className='bg-white rounded-full w-full h-full items-center justify-center'>
                          <Text className='text-xs'>1/5</Text>
                        </View>
                      </View>
                    </View>
                    <View className='items-center gap-1'>
                      <Text className='text-[10px] opacity-60'>Tu 15</Text>
                      <View className='bg-red-400 p-[2px] size-[30px] rounded-full'>
                        <View className='bg-red-400 rounded-full w-full h-full items-center justify-center'>
                          <Text className='text-xs'>2/5</Text>
                        </View>
                      </View>
                    </View>
                    <View className='items-center gap-1'>
                      <Text className='text-[10px] opacity-60'>We 15</Text>
                      <View className='bg-red-400 p-[2px] size-[30px] rounded-full'>
                        <View className='bg-white rounded-full w-full h-full items-center justify-center'>
                          <Text className='text-xs opacity-20'>3/5</Text>
                        </View>
                      </View>
                    </View>
                    <View className='items-center gap-1'>
                      <Text className='text-[10px] opacity-60'>Th 15</Text>
                      <View className='bg-red-400 p-[2px] size-[30px] rounded-full'>
                        <View className='bg-white rounded-full w-full h-full items-center justify-center'>
                          <Text className='text-xs opacity-20'>4/5</Text>
                        </View>
                      </View>
                    </View>
                    <View className='items-center gap-1'>
                      <Text className='text-[10px] opacity-60'>Fr 15</Text>
                      <View className='bg-red-400 p-[2px] size-[30px] rounded-full'>
                        <View className='bg-white rounded-full w-full h-full items-center justify-center'>
                          <Text className='text-xs opacity-20'>5/5</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className='flex-row gap-2'>
                    <View className='size-[30px] opacity-20 items-center justify-center border rounded-full'>
                      <Text className='text-xs '>20</Text>
                    </View>
                    <View className='size-[30px] opacity-20 items-center justify-center border rounded-full'>
                      <Text className='text-xs '>21</Text>
                    </View>
                    <View className='size-[30px] opacity-20 items-center justify-center border rounded-full'>
                      <Text className='text-xs '>22</Text>
                    </View>
                    <View className='size-[30px] opacity-20 items-center justify-center border rounded-full'>
                      <Text className='text-xs '>23</Text>
                    </View>
                    <View className='size-[30px] opacity-20 items-center justify-center border rounded-full'>
                      <Text className='text-xs '>24</Text>
                    </View>
                    
                    
                  </View>
                </View>

                <View className='px-2 flex-1'>
                  <Text className='title'>2nd</Text>
                  <Text className='text-base font-geo mb-4'>day of my period</Text>
                  <View className='flex-row justify-between'>
                    <View className='items-center'>
                      <View className='border opacity-60 border-gray-200 size-[30px] rounded-full items-center justify-center'>
                        <Fontisto name="battery-quarter" size={20} color="red" />
                      </View>
                      <Text className='text-xs pt-1'>energy</Text>
                    </View>
                    <View className='items-center'>
                      <View className='border opacity-60 border-gray-200 size-[30px] rounded-full items-center justify-center'>
                        <FontAwesome6 name="chart-line" size={16} color="blue" />
                      </View>
                      <Text className='text-xs pt-1'>Libido</Text>
                    </View>
                    <View className='items-center'>
                      <View className='border opacity-60 border-gray-200 size-[30px] rounded-full items-center justify-center'>
                        <Entypo name="emoji-neutral" size={16} color="lime" />
                      </View>
                      <Text className='text-xs pt-1'>Mood</Text>
                    </View>
                    

                  </View>

                </View>
              </View>

              <View className=' bg-yellow-100 rounded-[34px] overflow-hidden relative'>

                <View className='flex-row relative'>

                  <View className='z-20 bg-green-200 p-4 pb-0 rounded-tr-[40px]'>
                    <Text className='rounded-full px-4 py-2 bg-white font-geo text-lg'>My protocol</Text>
                  </View>
                  <View className='items-center -translate-x-1 bg-yellow-100 z-10 justify-center px-4 rounded-bl-[40px]'>
                    <Text className='text-xs pl-2'>Backed by science & experts</Text>
                  </View>
                  <View className='-z-10 absolute h-10 top-1/2 w-20 bg-green-200 left-[120px] rounded-tr-full' />

                </View>

                <View className='p-6 bg-green-200'>
                  
                </View>

              </View>

              {/* <View className='p-2 pt-4'>
                <Text className='mb-3 text-geo  pl-4 italic'>I'm {name} and my goal is {myGoals[goal-1]}</Text>

              </View>

              <View className='bg-green-100 p-4 ' >
                <Text className='font-geo text-2xl mb-2 font-semibold'>Personal info</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>email: {email}</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>bitrhDate: {birthDate}</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>weight: {weight} kg</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>height: {height} cm</Text>
              </View>

              <View className=' p-4' >
                <Text className='font-geo text-2xl mb-2 font-semibold'>Cycle info</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>startMenstruation: {startMenstruation}</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>menstruatioDuration: {menstruatioDuration}</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>cycleDuration: {cycleDuration}</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>periodColor: {periodColors[periodColor-1]}</Text>
              </View>

              <View className=' p-4 bg-yellow-100 ' >
                <Text className='font-geo text-2xl mb-2 font-semibold'>Healthy Errors</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>cycle issues:</Text>
                <View className='flex-row gap-2  pl-2 flex-wrap mb-4'>
                  {cycleIssues.map(item => (
                    <Text key={item} className='border rounded-full p-1 px-3 border-red-500 text-red-500'>{item}</Text>
                  ))}
                </View>
                <Text className='font-geo text-lg mb-1 pl-2'>physycal & Emotional problems:</Text>
                <View className='flex-row gap-2  pl-2 flex-wrap mb-4'>
                  {physycalEmotionalProblems.map(item => (
                    <Text key={item} className='border rounded-full p-1 px-3 border-red-500 text-red-500'>{item}</Text>
                  ))}
                </View>
                <Text className='font-geo text-lg mb-1 pl-2'>flow: {flow}</Text>
                <Text className='font-geo text-lg mb-1 pl-2'>medicine: {isMedicine[medicine-1]}</Text>
              </View>
                <Text className='font-geo text-center text-green-300 uppercase text-xl   py-6 pb-20'>You are in the way to healthy life</Text> */}

              

            </ScrollView>
          </SafeAreaView>

  );
}
