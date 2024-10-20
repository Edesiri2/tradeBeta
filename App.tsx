import { useFontLoading } from "@src/hooks";
import { AppLoader } from "@src/screens/AppLoader";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Router } from "@src/router/router";

export default function App() {
  const { fontLoading, loadResourcesAndDataAsync } = useFontLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      loadResourcesAndDataAsync();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaProvider>
      {fontLoading ? <AppLoader /> : <Router />}
    </SafeAreaProvider>
  );
}
