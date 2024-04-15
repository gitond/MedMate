const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import PatientSideMain from "./screens/PatientSideMain";
import WelcomePage from "./screens/WelcomePage";
import Alerts from "./screens/Alerts";
import UpcomingEventsList from "./screens/UpcomingEventsList";
import MedicineView from "./screens/MedicineView";
import EventView from "./screens/EventView";
import CalendarScreen from "./screens/CalendarScreen";
import CalendarScreen3DotNavigat from "./screens/CalendarScreen3DotNavigat";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
    "Akshar-Regular": require("./assets/fonts/Akshar-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientSideMain"
              component={PatientSideMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Alerts"
              component={Alerts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpcomingEventsList"
              component={UpcomingEventsList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MedicineView"
              component={MedicineView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventView"
              component={EventView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CalendarScreen"
              component={CalendarScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CalendarScreen3DotNavigat"
              component={CalendarScreen3DotNavigat}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
