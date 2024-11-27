import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ViewBank = ({
  navigation,
}: RootStackScreenProps<appScreenNames.VIEW_BANK>) => {
  const [isBankAdded, setIsBankAdded] = React.useState(false);

  return (
    <Screen>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("@src/assets/arrow-left.png")} />
        </TouchableOpacity>
        <Text style={styles.h1}>My Bank</Text>
      </View>

      {!isBankAdded ? (
        <>
          <View style={styles.noBank}>
            <Image source={require("@src/assets/beta-testing.png")} />
            <Text style={{ fontWeight: "bold", fontSize: 20, lineHeight: 24 }}>
              No bank added yet!
            </Text>
            <Text style={{ textAlign: "center", marginTop: 4, width: 239 }}>
              Kindly add your bank details to in order to make withdrawals
            </Text>
          </View>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => {
              navigation.navigate(appScreenNames.ADD_BANK);
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Add a bank
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text
            style={{
              textAlign: "left",
              marginTop: 20,
              fontSize: 16,
              lineHeight: 24,
              fontWeight: 400,
            }}
          >
            These are the verified bank accounts submitted for withdrawals. You
            can add up to three (3) banks accounts.
          </Text>
          <TouchableOpacity
            style={{ marginVertical: 33 }}
            onPress={() => {
              navigation.navigate(appScreenNames.BANK_DETAILS, {
                name: "Bunmi",
                accountNumber: "1234567890",
                bankName: "Access Bank",
                status: true,
              });
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 20,
                borderRadius: 12,
                backgroundColor: "#F6F6F6",
              }}
            >
              <View>
                <Text style={styles.h4}>Wema Bank</Text>
                <Text style={styles.p}>Yemi Green Ademola</Text>
                <Text style={styles.p}>7566599987</Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Icon name="check-circle" size={16} color="#0C8716" />
                <Text>Verified</Text>
              </View>
            </View>
          </TouchableOpacity>
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#1C1C1C",
  },
  noBank: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  addBtn: {
    backgroundColor: "#DB3A09",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 20,
  },
  p: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    color: "#1C1C1C",
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    color: "#1C1C1C",
  },
});
