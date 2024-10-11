// import React, { useCallback, useEffect } from "react";
// import { StatusBar, View } from "react-native";

// import * as SplashScreen from "expo-splash-screen";

// import theme from "./src/global/theme";
// import Routes from "./src/routes";

// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_500Medium,
//   Roboto_700Bold,
// } from "@expo-google-fonts/roboto";
// import { ThemeProvider } from "styled-components";

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     Roboto_400Regular,
//     Roboto_500Medium,
//     Roboto_700Bold,
//   });
//   useEffect(() => {
//     async function prepare() {}
//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.preventAutoHideAsync();
//     }
//   }, [fontsLoaded]);
//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
//       <StatusBar color="light" />
//       <ThemeProvider theme={theme}>
//         <Routes />
//       </ThemeProvider>
//     </View>
//   );
// }
import React, { useCallback, useEffect } from "react";
import { StatusBar, View } from "react-native";

import * as SplashScreen from "expo-splash-screen";

import theme from "./src/global/theme";
import Routes from "./src/routes";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";

// Mantenha a splash screen visível até as fontes carregarem
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      // Nenhuma função precisa ser chamada aqui, já que preventAutoHideAsync já foi chamado
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Agora que as fontes foram carregadas, esconda a splash screen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar color="light" />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </View>
  );
}
