import { StatusBar } from 'expo-status-bar';
import AppRoutes from './src/routes/app.routes';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';


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
      <StatusBar style="auto" />
    </>
  );
}

