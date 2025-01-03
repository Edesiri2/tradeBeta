import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import { Screen } from "../Screen";
import { DVH, moderateScale } from "@src/resources/scaling";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { BoldText, LightText } from "@src/components/shared/text";
import { Button } from "@src/components/shared/button";

export const BankTransfer = ({
  navigation,
}: RootStackScreenProps<appScreenNames.BANK_TRANSFER>) => {
  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={moderateScale(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <BoldText sizeBody black>
          Bank Transfer
        </BoldText>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          //   gap: moderateScale(8),
          alignContent: "center",
          marginTop: moderateScale(40),
        }}
      >
        <BoldText warning>₦220.00</BoldText>
      </View>
      <View style={styles.sendScreen}>
        <BoldText sizeMedium black>
          Kindly choose a payment option
        </BoldText>
      </View>
      <View
        style={{
          marginTop: moderateScale(20),
          backgroundColor: "#F6F6F6",
          padding: moderateScale(20),
          gap: moderateScale(20),
        }}
      >
        <View>
          <LightText warning>Amount</LightText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: moderateScale(10),
            }}
          >
            <BoldText>NGN 220,000.78</BoldText>
            <Icon name="paste" size={moderateScale(20)} color={colors.black} />
          </View>
        </View>
        <View>
          <LightText warning>Account Number</LightText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: moderateScale(10),
            }}
          >
            <BoldText>8888566664</BoldText>
            <Icon name="paste" size={moderateScale(20)} color={colors.black} />
          </View>
        </View>
        <View>
          <LightText warning>Bank Name</LightText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: moderateScale(10),
            }}
          >
            <BoldText>WEMA Bank</BoldText>
            <Icon name="paste" size={moderateScale(20)} color={colors.black} />
          </View>
        </View>
        <View>
          <LightText warning>Beneficiary</LightText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: moderateScale(10),
            }}
          >
            <BoldText>Royal Tradebeta Co. LTD</BoldText>
            {/* <Icon name="paste" size={moderateScale(20)} color={colors.black} /> */}
          </View>
        </View>
      </View>
      <View style={{ marginTop: moderateScale(50) }}>
        <Button
          title="Transfer Completed"
          bgMainColor
          sizeBody
          textWhite
          onPress={() => {}}
        />
        <TouchableOpacity onPress={() => navigation.navigate(appScreenNames.PAYMENT_METHOD)}>
          <BoldText style={{ marginTop: moderateScale(15), alignItems: "center" }}>Change payment method</BoldText>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  sendScreen: {
    paddingVertical: DVH(3),
    flexDirection: "column",
  },
});
