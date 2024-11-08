import React from "react";
import { useState } from "react";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "../Screen";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { TextInputs } from "@src/components/shared/input/Input";
import { addBankTypes } from "@src/form/schema/types";
import { Button } from "@src/components/shared/button";
import { moderateScale, screenHeight } from "@src/resources/scaling";
import { MaterialIcons } from "@expo/vector-icons";

export const NewPassword = ({
  navigation,
}: RootStackScreenProps<appScreenNames.NEW_PASSWORD>) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<addBankTypes>({
    mode: "onChange",
    // resolver: yupResolver(addBankSchema),
  });
  return (
    <>
      <Screen>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require("@src/assets/arrow-left.png")} />
          </TouchableOpacity>
          <Text style={styles.h1}>Change Password</Text>
        </View>

        <View style={{ marginTop: 41, gap: 64, flex: 1 }}>
          <View style={{ gap: 8 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", lineHeight: 28.8 }}
            >
              Set a new password
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "400", lineHeight: 24 }}>
              Kindly create a new password to your Tradebeta account.
            </Text>
          </View>
          <View>
            <View style={{ width: 350 }}>
              <Controller
                control={control}
                name="account_number"
                defaultValue=""
                render={({ field }) => (
                  <TextInputs
                    label="New Password"
                    placeholder="********"
                    iconName="lock"
                    iconFamily="Entypo"
                    error={errors?.account_number?.message}
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                    showErrorText
                  />
                )}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "400",
                  lineHeight: 19.5,
                  color: "#252525",
                  marginTop: -15,
                }}
              >
                Must 8 characters at least and co.
              </Text>
            </View>
            <View style={{ width: 350, marginTop: 16 }}>
              <Controller
                control={control}
                name="account_number"
                defaultValue=""
                render={({ field }) => (
                  <TextInputs
                    label="Confirm Password"
                    placeholder="********"
                    iconName="lock"
                    iconFamily="Entypo"
                    error={errors?.account_number?.message}
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                    showErrorText
                  />
                )}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            setShowModal(!showModal);
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
              lineHeight: 24,
            }}
          >
            Update password
          </Text>
        </TouchableOpacity>
      </Screen>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="check-circle-outline"
              size={100}
              color="green"
            />
            <View style={{ marginVertical: moderateScale(20) }}>
              <Text style={styles.modalTitle}>Password Change Successful!</Text>
              <Text style={styles.modalMessage}>
                Your password has been changed, you can now log back into your
                Tradebeta account
              </Text>
            </View>
            <Button
              title="Update"
              bgMainColor
              sizeBody
              textWhite
              style={{
                width: "100%",
              }}
              onPress={() => {
                setShowModal(!showModal);
                navigation.navigate(bottomTabScreenNames.SETTINGS);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#1C1C1C",
  },
  addBtn: {
    backgroundColor: "#DB3A09",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: screenHeight / 2,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ff4500",
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
