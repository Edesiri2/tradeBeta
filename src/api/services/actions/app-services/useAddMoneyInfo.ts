import { app } from "@src/api/endpoint/endpoint";
import { Get } from "@src/api/request";
import { useAuthStore } from "@src/hooks/store";
import { useState } from "react";

export const useAddMoneyInfo = () => {
  const [addMoneyInfoData, setAddMoneyInfoData] = useState<boolean>(false);
  const addMoneyInfo = async (token: string) => {
    // console.log("Token", token);
    setAddMoneyInfoData(true);
    try {
      const { data } = await Get(app.ADD_MONEY_INFO, {
        Authorization: `Bearer ${token}`,
      });
      console.log("Data", data?.data);
      return data?.data;
    } catch (error) {
      console.log("Error", error);
    } finally {
      setAddMoneyInfoData(false);
    }
  };
  return { addMoneyInfo, addMoneyInfoData };
};
