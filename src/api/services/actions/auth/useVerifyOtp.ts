import { auth } from "@src/api/endpoint/endpoint";
import { Post } from "@src/api/request";
import { useState } from "react";
import { Alert } from "react-native";

type payloadType = {
  email: string;
  code: string;
};

export const useVerifyOtp = () => {
  const [verifyingOtp, setVerifyingOtp] = useState<boolean>(false);
  const [isOTPVerified, setIsOTPVerified] = useState<boolean>(false);

  const verifyOTP = async (payload: payloadType) => {
    setVerifyingOtp(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const { status } = await Post(
        `${auth.VERIFY_OTP}?email=${payload.email}&code=${payload.code}`,
        {},
        {}
      );
      if (status === 200) {
        setIsOTPVerified(true);
      } else {
        Alert.alert("Error", "Error verifying OTP");
        setIsOTPVerified(false);
      }
    } catch (err) {
      console.log("Error", err);
      setIsOTPVerified(false);
    } finally {
      setVerifyingOtp(false);
    }
  };

  return {
    verifyingOtp,
    isOTPVerified,
    verifyOTP,
  };
};
