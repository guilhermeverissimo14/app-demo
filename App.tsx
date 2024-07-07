import { StatusBar } from 'expo-status-bar';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <>
      <AppRoutes />
      <StatusBar style="auto" />
    </>
  );
}

