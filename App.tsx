import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import {
  Inter_700Bold,
  Inter_400Regular,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Home />
    </>
  );
}
