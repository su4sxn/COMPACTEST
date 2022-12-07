const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Loading from "./screens/Loading";
import MaakOverscrijving from "./screens/MaakOverscrijving";
import MaakOverscrijving1 from "./screens/MaakOverscrijving1";
import MaakOverscrijving2 from "./screens/MaakOverscrijving2";
import MaakOverscrijving3 from "./screens/MaakOverscrijving3";
import Home from "./screens/Home";
import Loding from "./screens/Loding";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
    "JetBrains Mono": require("./assets/fonts/JetBrains Mono.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Loading"
              component={Loading}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MaakOverscrijving"
              component={MaakOverscrijving}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MaakOverscrijving1"
              component={MaakOverscrijving1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MaakOverscrijving2"
              component={MaakOverscrijving2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MaakOverscrijving3"
              component={MaakOverscrijving3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loding"
              component={Loding}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Loading />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
