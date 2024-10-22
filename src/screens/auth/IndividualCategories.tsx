import { authScreenNames } from "@src/navigation/naviagtion-names";
import { AuthScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { BoldText, LightText } from "@src/components/shared/text";
import { useStepper } from "@src/stepper/hooks/useStepper";
import { individualKYCFrmSteps } from "@src/contants/steps";
import { FormStepper } from "@src/stepper/ui/Stepper";
import { colors } from "@src/resources/colors";
import {
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import {
  DVH,
  moderateScale,
  screenHeight,
  verticalScale,
} from "@src/resources/scaling";
import {
  Address,
  IdVerification,
  Personal,
} from "@src/form/components/individual-kyc";
import { Button } from "@src/components/shared/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  individualCategoriesStep1FrmTypes,
  individualCategoriesStep2FrmTypes,
  individualCategoriesStep3FrmTypes,
} from "@src/form/schema/types";
import {
  individualCategoriesStep1FrmSchema,
  individualCategoriesStep2FrmSchema,
  individualCategoriesStep3FrmSchema,
} from "@src/form/validation/rules";
import { MaterialIcons } from "@expo/vector-icons";

export const IndividualCategories =
  ({}: AuthScreenProps<authScreenNames.INDIVIDUAL_CATEGORIES>) => {
    const { activeStepIndex, submittedStepsIndex, nextStep, prevStep } =
      useStepper(individualKYCFrmSteps);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    //step 1
    const {
      control: individualCategoriesStep1Control,
      formState: { errors: individualCategoriesStep1Error },
      trigger: individualCategoriesStep1Trigger,
      setValue: individualCategoriesStep1SetValue,
      clearErrors: individualCategoriesStep1ClearErrors,
    } = useForm<individualCategoriesStep1FrmTypes>({
      mode: "onChange",
      resolver: yupResolver(individualCategoriesStep1FrmSchema),
    });

    //step 2
    const {
      control: individualCategoriesStep2Control,
      formState: { errors: individualCategoriesStep2Error },
      trigger: individualCategoriesStep2Trigger,
      setValue: individualCategoriesStep2SetValue,
      clearErrors: individualCategoriesStep2ClearErrors,
    } = useForm<individualCategoriesStep2FrmTypes>({
      mode: "onChange",
      resolver: yupResolver(individualCategoriesStep2FrmSchema),
    });

    //step 3
    const {
      control: individualCategoriesStep3Control,
      formState: { errors: individualCategoriesStep3Error },
      trigger: individualCategoriesStep3Trigger,
      setValue: individualCategoriesStep3SetValue,
      clearErrors: individualCategoriesStep3ClearErrors,
    } = useForm<individualCategoriesStep3FrmTypes>({
      mode: "onChange",
      resolver: yupResolver(individualCategoriesStep3FrmSchema),
    });

    const onSubmit = async () => {
      let isValid = false;
      if (activeStepIndex === 0) {
        isValid = await individualCategoriesStep1Trigger();
        if (isValid) nextStep();
      } else if (activeStepIndex === 1) {
        isValid = await individualCategoriesStep2Trigger();
        if (isValid) nextStep();
      } else if (activeStepIndex === 2) {
        isValid = await individualCategoriesStep3Trigger();
        if (isValid) {
          setModalVisible(!modalVisible);
          console.log("form filled successfully");
        }
      }
    };

    const steps = [
      <Personal
        useFormProps={{
          control: individualCategoriesStep1Control,
          errors: individualCategoriesStep1Error,
          setValues: individualCategoriesStep1SetValue,
          clearErrors: individualCategoriesStep1ClearErrors,
        }}
      />,
      <Address
        useFormProps={{
          control: individualCategoriesStep2Control,
          errors: individualCategoriesStep2Error,
          setValues: individualCategoriesStep2SetValue,
          clearErrors: individualCategoriesStep2ClearErrors,
        }}
      />,
      <IdVerification
        useFormProps={{
          control: individualCategoriesStep3Control,
          errors: individualCategoriesStep3Error,
          setValues: individualCategoriesStep3SetValue,
          clearErrors: individualCategoriesStep3ClearErrors,
        }}
      />,
    ];
    return (
      <>
        <View style={styles.container}>
          <View style={styles.stepperContainer}>
            <FormStepper
              formSteps={individualKYCFrmSteps}
              activeStep={activeStepIndex}
              submittedSteps={submittedStepsIndex}
              submittedBgColor={`${colors.main_color}`}
              activeBgColor={colors.darkGray}
              stepperType='horizontal-title'
            />
          </View>
          <View style={styles.titleContainer}>
            <BoldText sizeLarge mainColor>
              {activeStepIndex === 0
                ? "Tell us more about you"
                : activeStepIndex === 1
                ? "Home Address"
                : activeStepIndex === 2
                ? "Image Capture"
                : undefined}
            </BoldText>
            <LightText sizeBody black>
              {activeStepIndex === 0
                ? "It is CBN standard guidelines to get KYC details of all account holders"
                : activeStepIndex === 1
                ? "It is CBN standard guidelines to get KYC details of all account holders"
                : activeStepIndex === 2
                ? "We use your selfie to compare with photo on your ID"
                : undefined}
            </LightText>
          </View>
          {steps[activeStepIndex]}
          <Button
            title='Continue'
            bgMainColor
            sizeBody
            textWhite
            style={{
              width: "100%",
            }}
            onPress={() => onSubmit()}
          />
        </View>
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
                  Check your email and click the link to verify your email
                  address
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
                }}
              />
            </View>
          </View>
        </Modal>
      </>
    );
  };

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    paddingTop:
      Platform.OS === "android" ? StatusBar.currentHeight : verticalScale(30),
    backgroundColor: colors.white,
    height: "100%",
  },
  stepperContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
  },
  titleContainer: {
    gap: moderateScale(10),
    marginBottom: DVH(5),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height:
      Platform.OS === "ios"
        ? screenHeight / moderateScale(2)
        : screenHeight / moderateScale(2.2),
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
