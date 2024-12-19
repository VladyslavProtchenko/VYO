import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Archivo: require('../assets/fonts/ArchivoBlack-Regular.ttf'),
    Geologica: require('../assets/fonts/Geologica-VariableFont_CRSV,SHRP,slnt,wght.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.replace('/welcome');

    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }}/>
        <Stack.Screen name="welcome" options={{ headerShown: false }}/>
        <Stack.Screen name="preview" options={{ headerShown: false }}/>
        <Stack.Screen name="signup" options={{ headerShown: false }}/>
        <Stack.Screen name="reset_pass_email" options={{ headerShown: false }}/>
        <Stack.Screen name="reset_pass" options={{ headerShown: false }}/>

        <Stack.Screen name="step1" options={{ headerShown: false }}/>
        <Stack.Screen name="step2" options={{ headerShown: false }}/>
        <Stack.Screen name="step3" options={{ headerShown: false }}/>
        <Stack.Screen name="step4" options={{ headerShown: false }}/>
        <Stack.Screen name="step5" options={{ headerShown: false }}/>
        <Stack.Screen name="step6" options={{ headerShown: false }}/>
        <Stack.Screen name="step7" options={{ headerShown: false }}/>
        <Stack.Screen name="step8" options={{ headerShown: false }}/>
        <Stack.Screen name="step9" options={{ headerShown: false }}/>

        <Stack.Screen name="finish" options={{ headerShown: false }}/>
        <Stack.Screen name="home" options={{ headerShown: false }}/>


        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
