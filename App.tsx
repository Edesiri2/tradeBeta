import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import RegisterInfo from "./screens/RegisterInfo";
import CarouselSlider from "./screens/CarouselSlider";
import HomeScreen from "./screens/HomeScreen";
import RegistrationForm from "./screens/RegistrationForm";
import UserCategory from "./screens/kyc/UserCategory";
import IndividualCategories from "./screens/kyc/IndividualCategory";
import BusinessKyc from "./screens/businessKyc/BusinessKyc";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" component={CarouselSlider} options={{ headerShown: false }} />
        <Stack.Screen name="main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={RegisterInfo} />
        <Stack.Screen name="register-form" component={RegistrationForm} />
        <Stack.Screen name="user-categories" component={UserCategory} />
        <Stack.Screen name="individual-categories" component={IndividualCategories} />
        <Stack.Screen name="corporate-categories" component={BusinessKyc} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
