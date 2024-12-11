import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonRounded from '@/components/ui/ButtonRounded';
import { Link, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Input from '@/components/ui/Input';




export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isPass, setIsPass] = useState(true);

  useEffect(() => {
    if(pass.length > 8) setIsPass(true)
  },[pass])

  // const validatePassword = () => {
  //   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   return regex.test(pass);
  // }
  const handleBlur = () => {
    if (pass.length < 8) {
      setIsPass(false);
    } else {
      setIsPass(true); // Clear error if validation passes
    }
  };

  const createAccount = () => {
    if(!pass || pass.length < 8) return setIsPass(false);

    router.navigate('/preview')
  }
  
  return (
    <View className='flex-1 bg-white w-full'>
        <ImageBackground source={require('@/assets/images/signup.png')} resizeMode="cover" className='h-1/4 w-full items-center pt-20'>
          {/* <Image width={50} height={50} source={require('@/assets/images/Logo.png')} className='w-[48px] h-[47px]' /> */}
        </ImageBackground>
        <ScrollView className='p-6'>
          <Text className='font-archivo text-[36px] leading-[36px] w-full mb-6'>You’re worth it</Text>
          
          <View className='gap-6 mb-2'>
              <Input
                placeholder='Name' 
                value={name}
                onChange={setName}
              />
              <Input
                placeholder='Email' 
                value={email}
                onChange={setEmail}
              />
              <Input
                placeholder='Password' 
                value={pass}
                onBlur={handleBlur}
                onChange={setPass}
                isPassword={true}
                isPasswordConfirm={isPass}
                
              />
          </View>
          <Text className={`text-[12px] mb-[50px] opacity-60 font-geo font-[300] ${!isPass ? 'text-red-500': ''}`}>Minimum 8 characters</Text>
          <View className='gap-4'>
            <Text className='text-[12px] font-geo font-[300] text-center mb-6'>
              By continuing, you agree for YoYoMoods <Link href='/welcome' className='text-blue-700 underline'>Terms & Conditions</Link> and <Link href='/welcome' className='text-blue-700 underline'>Privacy Policy</Link>: ps, we'll never share your personal data
            </Text>
            <ButtonRounded
              title='Create Account'
              icon={(<FontAwesome6 name="arrow-right-long" size={24} color="white" />)}
              type='black'
              onPress={createAccount}
              iconLeft={false}
            />

            {/* <Link className='text-[16px] font-[500] ' href='/login'><Text className='opacity-60'>Have an account?</Text> <Text className='text-blue-700 underline'>Log in</Text></Link> */}
          </View>

        </ScrollView>
    </View>
  )
}