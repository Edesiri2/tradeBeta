import { moderateScale } from "@src/resources/scaling";
import React, { useRef, useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { LightText } from "@src/components/shared/text";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { Button } from "@src/components/shared/button";

type idVerificationFrmProps = {
  useFormProps: any;
};

export const IdVerification: React.FC<idVerificationFrmProps> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraStarted, setCameraStarted] = useState<boolean>(false);
  const [picUri, setPicUri] = useState<string>("");
  const cameraRef = useRef<any>(null);

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    Alert.alert("Camera Error", "We need your permission to show the camera", [
      {
        text: "Request permission",
        onPress: () => requestPermission(),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel pressed"),
      },
    ]);
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPicUri(photo?.uri);
      setCameraStarted(!cameraStarted);
      props?.setValues("image", photo?.uri);
      // Do something with the photo
    }
  };

  return (
    <>
      <View style={styles.imgContainer}>
        {cameraStarted ? (
          <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
            <TouchableOpacity onPress={async () => await takePicture()}>
              <MaterialIcons
                name='camera'
                size={moderateScale(60)}
                color={colors.white}
              />
            </TouchableOpacity>
          </CameraView>
        ) : (
          <Image
            source={
              picUri !== ""
                ? { uri: picUri }
                : require("@src/assets/Illustration.png")
            }
            resizeMode='cover'
            style={styles.img}
          />
        )}
        <View style={styles.bottomActionBtnContainer}>
          {cameraStarted && (
            <TouchableOpacity onPress={() => toggleCameraFacing()}>
              <Ionicons
                name='camera-reverse-sharp'
                size={moderateScale(30)}
                color={colors.main_color}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setCameraStarted(!cameraStarted);
            }}>
            <MaterialCommunityIcons
              name='face-recognition'
              size={moderateScale(20)}
              color={colors.main_color}
            />
            <LightText sizeBody black>
              ID Verification
            </LightText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: "93%",
    height: "50%",
    backgroundColor: "red",
    borderRadius: moderateScale(20),
    alignSelf: "center",
    marginBottom: "30%",
    // overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: moderateScale(20),
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: moderateScale(20),
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: moderateScale(5),
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(20),
  },
  bottomActionBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: moderateScale(20),
  },
});
