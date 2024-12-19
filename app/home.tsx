import { Image, ImageBackground, SafeAreaView, ScrollView, View } from "react-native";

export default function HomeScreen() {

  return (
    <ScrollView className='bg-white py-10 pb-[50px]'>
        <ImageBackground source={require('@/assets/images/home.jpg')} resizeMode="cover" className='h-[1400px] w-full items-center relative pt-20'>
            <View className='w-full h-6 absolute bg-white bottom-0'/>
        </ImageBackground>
    </ScrollView>
  );
}
