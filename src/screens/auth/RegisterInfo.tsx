import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Screen } from "../Screen";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/naviagtion-names";
import { BoldText, RegularText } from "@src/components/shared/text";
import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import { Button } from "@src/components/shared/button";

export const RegisterInfo = ({
  navigation,
}: AuthScreenProps<authScreenNames.REGISTER_INFO>) => {
  return (
    <Screen>
      <BoldText sizeLarge textStyle={styles.title}>
        Register your account
      </BoldText>
      <RegularText sizeBody style={styles.subtitle}>
        Start using Tradebeta with a few steps away.
      </RegularText>

      {/* Steps Section */}
      <View style={styles.stepsContainer}>
        {/* Step 1 */}
        <View style={styles.step}>
          <View style={styles.stepNumberContainer}>
            <BoldText sizeBody textStyle={styles.stepNumber}>
              1
            </BoldText>
          </View>
          <View style={styles.stepContent}>
            <BoldText sizeBody black>
              Verify your email address
            </BoldText>
            <RegularText sizeSmall textStyle={styles.stepDescription}>
              We will send a code to your email, copy and verify on the app.
            </RegularText>
          </View>
        </View>

        {/* Step 2 */}
        <View style={styles.step}>
          <View style={styles.stepNumberContainer}>
            <BoldText sizeBody textStyle={styles.stepNumber}>
              2
            </BoldText>
          </View>
          <View style={styles.stepContent}>
            <BoldText sizeBody black>
              Tell us more about you
            </BoldText>
            <RegularText sizeSmall textStyle={styles.stepDescription}>
              It is CBN standard guidelines to get KYC details of all account
              holders.
            </RegularText>
          </View>
        </View>

        {/* Step 3 */}
        <View style={styles.step}>
          <View style={styles.stepNumberContainer}>
            <BoldText sizeBody textStyle={styles.stepNumber}>
              3
            </BoldText>
          </View>
          <View style={styles.stepContent}>
            <BoldText sizeBody black>
              Setup a Transaction PIN
            </BoldText>
            <RegularText sizeSmall textStyle={styles.stepDescription}>
              This is the PIN that secures your account from unauthorised
              access.
            </RegularText>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", marginBottom: DVH(1) }}>
        <Button
          title='Continue'
          bgMainColor
          sizeBody
          textWhite
          onPress={() => navigation.navigate(authScreenNames.REGISTRATION_FORM)}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "#F8E9E9",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 20,
    color: "#900000", // dark red color
  },
  title: {
    color: "#900000", // dark red color
    marginBottom: DVH(1),
  },
  subtitle: {
    color: "#8A8A8A",
    marginBottom: DVH(3),
  },
  stepsContainer: {
    flex: 1,
  },
  step: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    padding: moderateScale(16),
    borderRadius: moderateScale(15),
    marginBottom: DVH(2),
    alignItems: "center",
  },
  stepNumberContainer: {
    width: moderateScale(32),
    height: moderateScale(32),
    backgroundColor: "#FFDFC7",
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
    marginRight: DVW(4),
  },
  stepNumber: {
    color: "#FF5A00",
  },
  stepContent: {
    flex: 1,
  },
  stepDescription: {
    color: "#8A8A8A",
    marginTop: moderateScale(4),
    lineHeight: DVH(2),
  },
  continueButton: {
    backgroundColor: "#FF5A00",
    paddingVertical: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
