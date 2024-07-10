import { StatusBar } from 'expo-status-bar';
import AppRoutes from '@/routes';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { theme } from '@/theme/theme';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null; //criar um loading
  }

  return (
    <>
      <AppRoutes />
      <StatusBar style="auto" backgroundColor={theme.colors.white[300]} />
    </>
  );
}

