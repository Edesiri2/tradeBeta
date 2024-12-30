import { auth } from "@src/api/endpoint/endpoint";
import { Post } from "@src/api/request";
import { useState } from "react";
import { Alert } from "react-native";

type payloadType = {
  email: string;
  agree: number;
  password: string;
  password_confirmation: string;
  referral_user_code: string;
};

export const useSendOtp = () => {
  const [sendingOTP, setSendingOTP] = useState<boolean>(false);
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);

  const sendOTP = async (payload: payloadType) => {
    setSendingOTP(true);
    try {
      const { status, data } = await Post(auth.SEND_OTP, payload, {});
      if (status === 200) {
        setIsOTPSent(true);
      } else {
        Alert.alert("Error", "An Error Occurred while sending OTP");
        setIsOTPSent(false);
      }
    } catch (err: any) {
      console.log("Error", err);
      setIsOTPSent(false);
    } finally {
      setSendingOTP(false);
    }
  };

  return {
    sendOTP,
    sendingOTP,
    isOTPSent,
  };
};
