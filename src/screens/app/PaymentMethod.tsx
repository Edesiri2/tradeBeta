import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import { useState } from "react";
import { Screen } from "../Screen";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { DVH, moderateScale } from "@src/resources/scaling";
import { FontAwesome as Icon } from "@expo/vector-icons";
import {
  BoldText,
  RegularText,
  SemiBoldText,
} from "@src/components/shared/text";
import { colors } from "@src/resources/colors";
import { Button } from "@src/components/shared/button";

export const PaymentMethod = ({
  navigation,
}: RootStackScreenProps<appScreenNames.PAYMENT_METHOD>) => {
  const [pinCode, setPinCode] = useState<any[]>([]);
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
          Payment Method
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
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(appScreenNames.BANK_TRANSFER)
          }
          style={styles.otherSettingsOptionsContainer}
        >
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name="lock" size={24} color="#ffffff" />
            </View>
            <SemiBoldText sizeBody black>
              Transfer/pay with your bank
            </SemiBoldText>
          </View>
          <Image source={require("@src/assets/arrow-right.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(appScreenNames.PAY_WITH_BANK)
          }
          style={styles.otherSettingsOptionsContainer}
        >
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name="bell" size={24} color="#ffffff" />
            </View>
            <SemiBoldText sizeBody black>
              Pay online with bank
            </SemiBoldText>
          </View>
          <Image source={require("@src/assets/arrow-right.png")} />
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
