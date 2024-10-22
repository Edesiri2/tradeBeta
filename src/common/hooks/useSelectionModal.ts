import { useState } from "react";

export const useSelectionModal = () => {
  const [selectedModalValue, setSelectedModalValue] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return {
    modalVisible,
    setModalVisible,
    selectedModalValue,
    setSelectedModalValue,
  };
};
