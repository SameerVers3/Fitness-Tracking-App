import { StatusBar } from 'expo-status-bar';
import SplashScreen from './SplashScreen'; // Import the new SplashScreen

export default function App() {
  return (
    <>
      <SplashScreen />
      <StatusBar backgroundColor="#161622" style="dark" />
    </>
  );
}
