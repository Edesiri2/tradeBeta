// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import HomeScreen from "../screens/HomeScreen";
// import { useState } from "react";
// import SplashScreen from "../screens/SplashScreen";
// import CarouselSlider from "../screens/CarouselSlider";



// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function AuthStack (){
//     return(
//         <Stack.Navigator initialRouteName="splash">
//             <Stack.Screen name="splash" component={CarouselSlider}/>
//         </Stack.Navigator>
//     )
// }

// function AppTabs (){
//     return(
//         <Tab.Navigator initialRouteName="home">
//             <Tab.Screen name="home" component={HomeScreen}/>
//         </Tab.Navigator>
//     )
// }

// function MainAppStack (){
//   return(
//     <Drawer.Navigator>
//     <Drawer.Screen name="Tabs" component={AppTabs}/>
// </Drawer.Navigator> 
//   )
// }

// export const AppNavigation =()=>{
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     return(
//         <NavigationContainer>
//             {isLoggedIn? <MainAppStack/>: <CarouselSlider/>}
//         </NavigationContainer>
//     )
// }