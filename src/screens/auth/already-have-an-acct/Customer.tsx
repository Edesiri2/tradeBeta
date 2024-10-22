import { BoldText, LightText } from "@src/components/shared/text";
import { DVH, moderateScale } from "@src/resources/scaling";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customerFrmTypes } from "@src/form/schema/types";
import { customerFrmSchema } from "@src/form/validation/rules";
import { TextInputs } from "@src/components/shared/input/Input";
import Checkbox from "expo-checkbox";
import { colors } from "@src/resources/colors";
import { Button, ButtonOutline } from "@src/components/shared/button";
import { Entypo } from "@expo/vector-icons";
import { ScrollContainer } from "@src/screens/Scroll-Container";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "@src/router/types";
import { authScreenNames } from "@src/navigation/naviagtion-names";

export const Customer = () => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const navigation: NavigationProp<AuthStackParamList> = useNavigation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<customerFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(customerFrmSchema),
  });

  const onSubmit = (data: customerFrmTypes) => {
    if (data) {
      console.log(data);
    }
  };
  return (
    <ScrollContainer style={{}}>
      <View style={styles.titleContainer}>
        <BoldText mainColor sizeLarge>
          Welcome back!
        </BoldText>
        <LightText sizeBody black>
          Kindly sign in to your account.
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
      <View style={styles.checkContainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={(value) => {
              setChecked(value);
            }}
            color={isChecked ? colors.main_color : undefined}
          />
          <LightText sizeBody black>
            Remember me
          </LightText>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(authScreenNames.FORGOT_PASSWORD)}>
          <BoldText mainColor sizeBody>
            Forgot Password
          </BoldText>
        </TouchableOpacity>
      </View>
      <Button
        title='Sign in'
        bgMainColor
        textWhite
        sizeBody
        style={{
          width: "100%",
        }}
        onPress={handleSubmit(onSubmit)}
      />
      <TouchableOpacity style={styles.biometricBtn}>
        <Entypo
          name='fingerprint'
          color={colors.darkGray}
          size={moderateScale(20)}
        />
        <LightText sizeBody black>
          Set up biometrics login
        </LightText>
      </TouchableOpacity>
      <View style={styles.dontHaveAcctContainer}>
        <LightText sizeBody black>
          Set up biometrics login
        </LightText>
        <ButtonOutline
          borderMainColor
          textBlack
          sizeBody
          title='Register'
          style={{
            width: "100%",
          }}
          onPress={() => {}}
        />
      </View>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    gap: moderateScale(10),
    marginBottom: "10%",
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: DVH(3),
  },
  checkbox: {
    margin: moderateScale(8),
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  biometricBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(10),
    paddingVertical: moderateScale(30),
  },
  dontHaveAcctContainer: {
    flexDirection: "column",
    gap: moderateScale(15),
    alignItems: "center",
    paddingVertical: moderateScale(10),
  },
});
