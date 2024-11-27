import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Screen } from "../Screen";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { moderateScale } from "@src/resources/scaling";
import { BoldText } from "@src/components/shared/text";
import { colors } from "@src/resources/colors";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";

export default function TransactionDetails({
  navigation,
}: RootStackScreenProps<appScreenNames.TRANSACTION_DETAILS>) {
  return (
    <View>
      <View style={styles.container}>
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
            Transaction Details
          </BoldText>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="checkmark-circle"
            size={moderateScale(61)}
            color="#0C8716"
          />
          <Text style={{ fontWeight: "700", fontSize: 16, lineHeight: 24 }}>
            Successful
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 29,
              lineHeight: 34.8,
              marginTop: 10,
              color: "#DB3A09",
            }}
          >
            ¥16.55
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 21,
          paddingTop: 27,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 24,
            color: "#DB3A09",
          }}
        >
          Receipt
        </Text>
        <View style={{ marginTop: 10, width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Ref Number
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              000085752257
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Payment Method
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              Transfer
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Payment Date
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              09: 31 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Payment time
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              09: 31 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Recipient Name
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              Bayo Adepoju
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Account Number
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              000085752257
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Amount
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              16.55
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Consultant code
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              752257
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 13, lineHeight: 19.5 }}>
              Payment status
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 13, lineHeight: 19.5 }}>
              Successful
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main_light_color,
    paddingTop: 58,
    paddingHorizontal: 21,
    paddingBottom: 54,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
});
