import { useRef, useState } from "react";

export const useOtpInput = () => {
  const [otpValue, setOtpValue] = useState(""); // State to store OTP value
  const otpInputRef = useRef(null); // Reference to OTP input

  // Function to handle OTP changes
  const handleOtpChange = (otp: string) => {
    if (otp) {
      setOtpValue(otp); // Update the real OTP value
    }
  };

  return {
    otpValue,
    otpInputRef,
    setOtpValue,
    handleOtpChange,
  };
};
