import { authScreenNames } from "@src/navigation/naviagtion-names";
import { AuthScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { Screen } from "../Screen";
import { AuthHeader } from "@src/components/auth";
import { Modal, StyleSheet, View, Text } from "react-native";
import { BoldText, LightText } from "@src/components/shared/text";
import { moderateScale, screenHeight } from "@src/resources/scaling";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setNewPasswordFrmTypes } from "@src/form/schema/types";
import { setNewPasswordFrmSchema } from "@src/form/validation/rules";
import { TextInputs } from "@src/components/shared/input/Input";
import { Button, ButtonOutline } from "@src/components/shared/button";
import { MaterialIcons } from "@expo/vector-icons";

export const SetNewPassword = ({
  navigation,
}: AuthScreenProps<authScreenNames.SET_NEW_PASSWORD>) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<setNewPasswordFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(setNewPasswordFrmSchema),
  });

  const onSubmit = (data: setNewPasswordFrmTypes) => {
    if (data) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <>
      <Screen>
        <AuthHeader onPress={() => navigation.goBack()} />
        <View style={styles.titleContainer}>
          <BoldText mainColor sizeLarge>
            Forgot Password
          </BoldText>
          <LightText sizeBody black>
            Enter your email and we'll send you a link to reset your password.
          </LightText>
        </View>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInputs
              label='Password'
              placeholder='******'
              iconName='lock'
              iconFamily='FontAwesome'
              passwordInput
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
              error={errors?.new_password?.message}
              showErrorText
            />
          )}
          name='new_password'
          defaultValue=''
        />
        <Controller
          control={control}
          render={({ field }) => (
            <TextInputs
              label='Password'
              placeholder='Confirm your password'
              iconName='lock'
              iconFamily='FontAwesome'
              passwordInput
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
              error={errors?.confirm_password?.message}
              showErrorText
            />
          )}
          name='confirm_password'
          defaultValue=''
        />

        <View style={styles.bottomBtnContainer}>
          <Button
            title='Reset password'
            bgMainColor
            textWhite
            sizeBody
            style={{
              width: "100%",
            }}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </Screen>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='check-circle-outline'
              size={100}
              color='green'
            />
            <View style={{ marginVertical: moderateScale(20) }}>
              <Text style={styles.modalTitle}>Password Reset Complete!</Text>
              <Text style={styles.modalMessage}>
                You password has been reset, you can now log back into your
                Tradebeta account
              </Text>
            </View>
            <Button
              title='Sign in'
              bgMainColor
              sizeBody
              textWhite
              style={{
                width: "100%",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    gap: moderateScale(10),
    marginBottom: "10%",
  },
  bottomBtnContainer: {
    height: "48%",
    justifyContent: "flex-end",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: screenHeight / 2.2,
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
