import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const AddBank = ({
  navigation,
}: RootStackScreenProps<appScreenNames.ADD_BANK>) => {
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
        <Text style={styles.h1}>Add a bank</Text>
      </View>

      <View style={styles.mainDiv}>
        <Text
          style={{
            fontWeight: "normal",
            fontSize: 16,
            lineHeight: 24,
            color: "#252525",
          }}
        >
          Please make sure the account is primarily yours and corresponds with
          your Tradebeta details.
        </Text>

        <View>
            
        </View>
      </View>

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          //   navigation.navigate(appScreenNames.ADD_BANK);
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
          Save bank
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
});
