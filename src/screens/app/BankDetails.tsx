import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Screen } from "../Screen";

export const BankDetails = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.BANK_DETAILS>) => {
  const { name, accountNumber, bankName, status } = route.params;
  return (
    <>
      <Screen>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require("@src/assets/arrow-left.png")} />
          </TouchableOpacity>
          <Text style={styles.h1}>My bank details</Text>
        </View>

        <View style={{ marginVertical: 35, marginHorizontal: 20, gap: 32 }}>
          <View>
            <Text style={styles.h4}>Name</Text>
            <Text style={styles.p}>{name}</Text>
          </View>
          <View>
            <Text style={styles.h4}>Account</Text>
            <Text style={styles.p}>{accountNumber}</Text>
          </View>
          <View>
            <Text style={styles.h4}>Bank Name</Text>
            <Text style={styles.p}>{bankName}</Text>
          </View>
          <View>
            <Text style={styles.h4}>Status</Text>
            <Text style={styles.p}>{status}</Text>
          </View>
        </View>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#1C1C1C",
  },
  mainDiv: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: 38,
  },
  addBtn: {
    backgroundColor: "#DB3A09",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 20,
  },
  h4: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5,
    color: "#DB3A09",
  },
  p: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 19.2,
    color: "#252525",
  },
});
