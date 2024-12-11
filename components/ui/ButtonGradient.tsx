import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient({title, icon, onPress}: {title: string, icon?: any, onPress?:() => void}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={['#FDFFA2', '#B4ECD0']}
            className='h-[48px] w-full rounded-full items-center justify-center'
            style={{height: 48, width: '100%', borderRadius: 48, }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <View className='h-full w-full flex-row gap-4 items-center justify-center'>
                <Text className='font-geo text-[16px] font-[500]'>{title}</Text>
                {icon}
            </View>
        </LinearGradient>

    </TouchableOpacity>
  )
}