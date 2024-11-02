import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const ViewBank = ({
  navigation,
}: RootStackScreenProps<appScreenNames.VIEW_BANK>) => {
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
});
