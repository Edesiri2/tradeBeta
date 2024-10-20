import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppStack } from "./app-stack";
import { AuthStack } from "./auth-stack";
import { useAuthStore } from "@src/hooks/store";

export const Router = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <>
      <NavigationContainer>
        <StatusBar style='dark' />
        {isAuthenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};
