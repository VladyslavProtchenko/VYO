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
      router.replace('/step1');

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


        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
