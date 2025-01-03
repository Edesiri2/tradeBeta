import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { DVH, moderateScale } from "@src/resources/scaling";
import { BoldText, LightText, SemiBoldText } from "@src/components/shared/text";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { Screen } from "../Screen";

export const PayWithBank = ({
  navigation,
}: RootStackScreenProps<appScreenNames.PAY_WITH_BANK>) => {
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
          Pay with bank
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
          Kindly select a bank to proceed with your payment
        </BoldText>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(appScreenNames.BANK_TRANSFER)}
          style={styles.otherSettingsOptionsContainer}
        >
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name="lock" size={24} color="#ffffff" />
            </View>
            <SemiBoldText sizeBody black>
              FlutterWave
            </SemiBoldText>
          </View>
          <Image source={require("@src/assets/arrow-right.png")} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{ marginTop: moderateScale(50), alignItems: "center" }}
          onPress={() => navigation.navigate(appScreenNames.PAYMENT_METHOD)}
        >
          <BoldText>Change payment method</BoldText>
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
  otherSettingsOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  otherSettingsOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 20,
  },
  icon: {
    padding: 8,
    backgroundColor: "#DB3A09",
    borderRadius: 40 / 2,
    color: "#FFFFFF",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
