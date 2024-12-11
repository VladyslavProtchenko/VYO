
import { Text, TouchableOpacity } from 'react-native';
import clsx from 'clsx';

interface IProps {
    onPress?: () => void;
    type?: 'black' | 'white' | 'gradient';
    title?: string;
    icon?: any;
    iconLeft?: boolean;
    className?: string;
}

export default function ButtonRounded({ title, icon, type, iconLeft, className, onPress }: IProps) {
  return (
    <TouchableOpacity 
        onPress={onPress}
        className={
            `flex-row w-full min-h-[44px] items-center gap-5 justify-center rounded-full ${ 
            type === 'black'? 'bg-black' 
            : type === 'white' 
            ? 'bg-[#F0F0F0]'
            :' bg-gradient(to right, #FF9F1C, #FF3F5C)'}
        ${className}`
        }
        >
      {(iconLeft && icon) ? icon : null}
      <Text className={`text-geo text-[16px] font-semibold ${type === 'black' ? 'text-white' : 'text-black'}`}>
        {title}
      </Text>
      {(!iconLeft && icon) ? icon : null}
    </TouchableOpacity>
  );
}
