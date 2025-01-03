import { app } from "@src/api/endpoint/endpoint";
import { Get } from "@src/api/request";
import { useState } from "react";

export const useGetTransactions = () => {
  const [gettingTransactions, setGettingTransactions] = useState<boolean>(false);
  const getTransactions = async (token: string) => {
    setGettingTransactions(true);
    try {
      const { data } = await Get(app.GET_TRANSACTIONS, {
        Authorization: `Bearer ${token}`,
      });
      return data?.data?.transactionss;
    } catch (error) {
      console.log("Error", error);
    } finally {
      setGettingTransactions(false);
    }
  };
  return {getTransactions, gettingTransactions};
};
