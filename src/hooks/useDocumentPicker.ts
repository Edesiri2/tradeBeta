import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import { Alert } from "react-native";

export type documentFileType = {
  mimeType?: string;
  name?: string;
  size?: number;
  uri?: string;
};

export const useDocumentPicker = () => {
  const [documentLoading, setDocumentLoading] = useState<boolean>(false);

  const pickDocument = async () => {
    setDocumentLoading(true);
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.canceled !== true) {
        const fileSize = result?.assets[0]?.size;
        const documentData: documentFileType = result?.assets[0];
        if (fileSize && fileSize > 1 * 1024 * 1024) {
          Alert.alert("File Size Error", "The selected file exceeds 1MB.");
          return;
        }
        return {
          data: documentData,
          uploaded: true,
        };
      }
    } catch (err: any) {
      console.log("Error", err);
      return {
        data: {
          mimeType: "",
          name: "",
          size: 0,
          uri: "",
        },
        uploaded: false,
      };
    } finally {
      setDocumentLoading(false);
    }
  };

  return {
    pickDocument,
    documentLoading,
  };
};
