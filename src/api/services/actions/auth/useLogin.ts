import { auth } from "@src/api/endpoint/endpoint";
import { Post } from "@src/api/request";
import { useAuthStore } from "@src/hooks/store";
import { useState } from "react";
import { Alert } from "react-native";

type payloadType = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const [loginIn, setLoginIn] = useState<boolean>(false);
  const { setIsAuthenticated, setUserData } = useAuthStore();

  const login = async (payload: payloadType) => {
    setLoginIn(true);
    try {
      const { status, data } = await Post(auth.LOGIN, payload, {});
      if (status === 200) {
        setUserData(data?.data);
        setIsAuthenticated(true); //automatically navigates to sign-in screen
      } else {
        Alert.alert("Error", "An Error Occurred while login-in");
      }
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setLoginIn(false);
    }
  };

  return {
    login,
    loginIn,
  };
};
