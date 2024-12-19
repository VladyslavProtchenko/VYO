import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonRounded from '@/components/ui/ButtonRounded';
import { Link, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Input from '@/components/ui/Input';
import useProfileStore from '@/store/useProfileStore';




export default function Login() {
  const { email: storeEmail} = useProfileStore()
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [noEmail, setNoEmail] = useState(false);

  useEffect(()=>{
    if(noEmail && email === storeEmail ) {
      setNoEmail(true)
    }

  },[email])

  const next = () => {
    if(!email) return
    if(email !== storeEmail) return setNoEmail(true)
    router.push('/(tabs)')
  }
  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/login.png')} resizeMode="cover" className='h-1/4 w-full items-center pt-20'>
          {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
        </ImageBackground>
        <ScrollView className='p-6'>
          <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>Welcome back, dear</Text>
          
          <View className='gap-6 mb-[50px]'>
              <Input
                placeholder='Email' 
                value={email}
                onChange={setEmail}
              />
              {noEmail && <Text className='text-[12px] text-red-500'>no user with this email</Text>}

              <Input
                placeholder='Password' 
                value={pass}
                onChange={setPass}
                isPassword={true}
              />
          </View>
          <View className='gap-4'>
            
            <Link className='text-[12px] font-geo font-thin text-center' href='/reset_pass_email'>Forgot password</Link>
            <Text className='text-[12px] font-geo font-thin text-center'>or</Text>
            <Link className='text-[16px] font-[500] text-blue-700 underline text-center mb-6' href='/signup'>Sign in</Link>
            <ButtonRounded
              title='Login'
              icon={(<FontAwesome6 name="arrow-right-long" size={24} color="white" />)}
              type='black'
              onPress={next}
              iconLeft={false}
            />

          </View>

        </ScrollView>
    </View>
  )
}