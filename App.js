import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "./src/screens/OnboardingScreen";
import SingIn from "./src/screens/SingIn";

const AppStack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("@Onboarding:alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("@Onboarding:alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);


  if (isFirstLaunch === null) {
    return <ActivityIndicator size={30} />;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
          <AppStack.Screen name="SingIn" component={SingIn} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <SingIn />;
  }
}
