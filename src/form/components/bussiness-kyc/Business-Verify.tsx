import {
  LightText,
  RegularText,
  SemiBoldText,
} from "@src/components/shared/text";
import { colors } from "@src/resources/colors";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { ScrollContainer } from "@src/screens/Scroll-Container";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Button } from "@src/components/shared/button";
import { documentFileType, useDocumentPicker } from "@src/hooks";

type personalFrmProps = {
  useFormProps: any;
};

export const BusinessVerify: React.FC<personalFrmProps> = ({
  useFormProps,
}) => {
  const [document, setDocument] = useState<documentFileType>({
    mimeType: "",
    name: "",
    size: 0,
    uri: "",
  });
  const [uploaded, setUploaded] = useState<boolean>(false);
  const { documentLoading, pickDocument } = useDocumentPicker();
  const props = useFormProps;

  const uploadCACCertificate = async () => {
    const pickedDocumentData = await pickDocument();
    if (
      pickedDocumentData?.data?.name ||
      pickedDocumentData?.data?.mimeType ||
      pickedDocumentData?.data?.size ||
      pickedDocumentData?.data?.uri
    ) {
      setDocument({
        ...document,
        mimeType: pickedDocumentData.data?.mimeType,
        name: pickedDocumentData.data?.name,
        size: pickedDocumentData.data?.size,
        uri: pickedDocumentData.data?.uri,
      });
      props?.setValues("cac_certificate", pickedDocumentData?.data?.name);
      setUploaded(pickedDocumentData?.uploaded);
      return;
    }
  };

  return (
    <ScrollContainer style={{}} height={"63%"}>
      <View style={styles.container}>
        <FontAwesome5
          size={moderateScale(30)}
          color={colors.main_color}
          name='file-image'
        />
        <SemiBoldText white sizeMedium>
          Business ID
        </SemiBoldText>
        <LightText black sizeBody>
          {document.name
            ? document.name
            : "Corporate Affairs Commission (CAC) Certificate"}
        </LightText>
        <View
          style={{
            paddingVertical: moderateScale(3),
          }}
        />
        <Button
          title={uploaded ? "File Uploaded" : "Upload CAC certificate"}
          bgBlack
          sizeSmall
          textWhite
          leftIcon={
            uploaded ? (
              <AntDesign
                name='checkcircle'
                size={moderateScale(20)}
                color={colors.white}
              />
            ) : (
              <Entypo
                name='upload'
                size={moderateScale(20)}
                color={colors.white}
              />
            )
          }
          onPress={async () => await uploadCACCertificate()}
          style={{
            height: DVH(5.5),
            width: "100%",
          }}
          isLoading={documentLoading}
        />
      </View>
      {props?.errors?.cac_certificate && (
        <View
          style={{
            marginBottom: moderateScale(5),
          }}>
          <RegularText sizeSmall warning>
            {props?.errors?.cac_certificate?.message}
          </RegularText>
        </View>
      )}
      <View>
        <LightText
          textStyle={{
            textAlign: "center",
            maxWidth: "85%",
            alignSelf: "center",
          }}>
          JPEGs and PDF file formats with not more than 1MB are specifically
          recommended
        </LightText>
      </View>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    backgroundColor: "#F6F6F6",
    borderWidth: DVW(0.3),
    borderColor: colors.lightGray,
    borderRadius: moderateScale(10),
    flexDirection: "column",
    gap: moderateScale(5),
    marginBottom: moderateScale(20),
  },
});
