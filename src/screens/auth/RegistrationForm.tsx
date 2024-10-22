import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Platform } from "react-native";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/naviagtion-names";
import { CheckBox } from "@src/common";
import { Screen } from "../Screen";
import { AuthHeader } from "@src/components/auth";
import { BoldText, LightText } from "@src/components/shared/text";
import { DVH, moderateScale, screenHeight } from "@src/resources/scaling";
import { TextInputs } from "@src/components/shared/input/Input";
import { colors } from "@src/resources/colors";
import { Button, ButtonOutline } from "@src/components/shared/button";
import { Controller, useForm } from "react-hook-form";
import { registrationFrmTypes } from "@src/form/schema/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFrmSchema } from "@src/form/validation/rules";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollContainer } from "../Scroll-Container";

export const RegistrationForm = ({
  navigation,
}: AuthScreenProps<authScreenNames.REGISTRATION_FORM>) => {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<registrationFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(registrationFrmSchema),
  });

  const onSubmit = (data: registrationFrmTypes) => {
    if (data) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <>
      <Screen>
        <AuthHeader onPress={() => navigation.goBack()} />
        <ScrollContainer style={{}}>
          <View style={styles.titleContainer}>
            <BoldText sizeLarge mainColor>
              Register your account
            </BoldText>
            <LightText sizeBody black>
              Complete the sign up to get started.
            </LightText>
          </View>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInputs
                label='Email'
                placeholder='a@example.com'
                iconName='mail'
                iconFamily='Entypo'
                error={errors?.email?.message}
                value={field.value}
                onChangeText={(value) => field.onChange(value)}
                showErrorText
              />
            )}
            name='email'
            defaultValue=''
          />

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
                error={errors?.password?.message}
                showErrorText
              />
            )}
            name='password'
            defaultValue=''
          />

          <Controller
            control={control}
            render={({ field }) => (
              <TextInputs
                label='Referral Code'
                placeholder='Enter a referral code'
                iconName='users'
                iconFamily='Entypo'
                error={errors?.referral_code?.message}
                value={field.value}
                onChangeText={(value) => field.onChange(value)}
                showErrorText
              />
            )}
            name='referral_code'
            defaultValue=''
          />

          <View style={styles.checkboxContainer}>
            <CheckBox
              isChecked={termsAccepted}
              onToggle={() => setTermsAccepted(!termsAccepted)}
            />
            <Text style={styles.checkboxLabel}>
              By signing up, you agree to the{" "}
              <Text style={styles.link}>Terms of Service</Text> and{" "}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View>
          <Button
            title='Continue'
            sizeBody
            textWhite={termsAccepted ? true : false}
            textBlack={!termsAccepted ? true : false}
            style={{
              backgroundColor: termsAccepted
                ? colors.main_color
                : colors.lightGray,
              width: "100%",
            }}
            onPress={handleSubmit(onSubmit)}
            disabled={!termsAccepted ? true : false}
          />
        </ScrollContainer>
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
              <Text style={styles.modalTitle}>Verification Email Sent!</Text>
              <Text style={styles.modalMessage}>
                Check your email and click the link to verify your email address
              </Text>
            </View>
            <Button
              title='Continue'
              bgMainColor
              sizeBody
              textWhite
              style={{
                width: "100%",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate(authScreenNames.REGISTRATION_OTP);
              }}
            />
            <ButtonOutline
              borderMainColor
              textBlack
              sizeBody
              title='Check Email'
              style={{
                width: "100%",
              }}
              onPress={() => navigation.navigate("")}
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
    marginBottom: DVH(5),
  },
  checkboxContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? "30%" : "20%",
    marginBottom: moderateScale(10),
    gap: moderateScale(10),
  },
  checkboxLabel: {
    color: "#707070",
  },
  link: {
    color: colors.main_color,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: Platform.OS === "ios" ? screenHeight / 2 : screenHeight / 1.9,
    backgroundColor: colors.white,
    padding: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    alignItems: "center",
  },

  modalTitle: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    marginBottom: moderateScale(10),
    color: "#ff4500",
    textAlign: "center",
  },
  modalMessage: {
    fontSize: moderateScale(16),
    textAlign: "center",
    marginBottom: moderateScale(20),
  },
});
