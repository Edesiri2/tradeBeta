import { authScreenNames } from "@src/navigation/naviagtion-names";
import { AuthScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { BoldText, LightText } from "@src/components/shared/text";
import { useStepper } from "@src/stepper/hooks/useStepper";
import { businessKYCFrmSteps } from "@src/contants/steps";
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
  BusinessInfo,
  BusinessVerify,
} from "@src/form/components/bussiness-kyc";
import { Button } from "@src/components/shared/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  businessCategoriesStep1FrmTypes,
  businessCategoriesStep2FrmTypes,
  businessCategoriesStep3FrmTypes,
} from "@src/form/schema/types";
import {
  businessCategoriesStep1FrmSchema,
  businessCategoriesStep2FrmSchema,
  businessCategoriesStep3FrmSchema,
} from "@src/form/validation/rules";
import { MaterialIcons } from "@expo/vector-icons";

export const BusinessCategories = ({
  navigation,
}: AuthScreenProps<authScreenNames.BUSINESS_CATEGORIES>) => {
  const { activeStepIndex, submittedStepsIndex, nextStep, prevStep } =
    useStepper(businessKYCFrmSteps);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  //step 1
  const {
    control: businessCategoriesStep1Control,
    formState: { errors: businessCategoriesStep1Error },
    trigger: businessCategoriesStep1Trigger,
    setValue: businessCategoriesStep1SetValue,
    clearErrors: businessCategoriesStep1ClearErrors,
  } = useForm<businessCategoriesStep1FrmTypes>({
    mode: "onChange",
    resolver: yupResolver(businessCategoriesStep1FrmSchema),
  });

  //step 2
  const {
    control: businessCategoriesStep2Control,
    formState: { errors: businessCategoriesStep2Error },
    trigger: businessCategoriesStep2Trigger,
    setValue: businessCategoriesStep2SetValue,
    clearErrors: businessCategoriesStep2ClearErrors,
  } = useForm<businessCategoriesStep2FrmTypes>({
    mode: "onChange",
    resolver: yupResolver(businessCategoriesStep2FrmSchema),
  });

  //step 3
  const {
    control: businessCategoriesStep3Control,
    formState: { errors: businessCategoriesStep3Error },
    trigger: businessCategoriesStep3Trigger,
    setValue: businessCategoriesStep3SetValue,
    clearErrors: businessCategoriesStep3ClearErrors,
  } = useForm<businessCategoriesStep3FrmTypes>({
    mode: "onChange",
    resolver: yupResolver(businessCategoriesStep3FrmSchema),
  });

  const onSubmit = async () => {
    let isValid = false;
    if (activeStepIndex === 0) {
      isValid = await businessCategoriesStep1Trigger();
      if (isValid) nextStep();
    } else if (activeStepIndex === 1) {
      isValid = await businessCategoriesStep2Trigger();
      if (isValid) nextStep();
    } else if (activeStepIndex === 2) {
      isValid = await businessCategoriesStep3Trigger();
      if (isValid) {
        setModalVisible(!modalVisible);
        console.log("form filled successfully");
      }
    }
  };

  const steps = [
    <BusinessInfo
      useFormProps={{
        control: businessCategoriesStep1Control,
        errors: businessCategoriesStep1Error,
        setValues: businessCategoriesStep1SetValue,
        clearErrors: businessCategoriesStep1ClearErrors,
      }}
    />,
    <Address
      useFormProps={{
        control: businessCategoriesStep2Control,
        errors: businessCategoriesStep2Error,
        setValues: businessCategoriesStep2SetValue,
        clearErrors: businessCategoriesStep2ClearErrors,
      }}
    />,
    <BusinessVerify
      useFormProps={{
        control: businessCategoriesStep3Control,
        errors: businessCategoriesStep3Error,
        setValues: businessCategoriesStep3SetValue,
        clearErrors: businessCategoriesStep3ClearErrors,
      }}
    />,
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.stepperContainer}>
          <FormStepper
            formSteps={businessKYCFrmSteps}
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
              ? "Tell us about your business"
              : activeStepIndex === 1
              ? "Business Location"
              : activeStepIndex === 2
              ? "ID Verification"
              : undefined}
          </BoldText>
          <LightText sizeBody black>
            {activeStepIndex === 0
              ? "It is CBN standard guidelines to get KYC details of all account holders"
              : activeStepIndex === 1
              ? "It is CBN standard guidelines to get KYC details of all account holders"
              : activeStepIndex === 2
              ? "It is CBN standard guidelines to get KYC details of all account holders. Kindly upload any of the three ID's"
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
              <Text style={styles.modalTitle}>KYC Completed!</Text>
              <Text style={styles.modalMessage}>
                Kindly wait between 5minutes to 12 hours to get your KYC
                verified and Approved.
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
                navigation.navigate(authScreenNames.CREATE_TRANSACTION_PIN);
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
