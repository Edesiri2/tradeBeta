import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "../Screen";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SemiBoldText } from "@src/components/shared/text";
import { FontAwesome as Icon } from "@expo/vector-icons";

export const Security = ({
  navigation,
}: RootStackScreenProps<appScreenNames.SECURITY>) => {
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
        <Text style={styles.h1}>Security</Text>
      </View>

      <View style={{ marginTop: 41, gap: 11 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(appScreenNames.CHANGE_PASSWORD);
          }}
          style={styles.otherSettingsOptionsContainer}
        >
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name="lock" size={24} color="#ffffff" />
            </View>
            <SemiBoldText sizeBody black>
              Change password
            </SemiBoldText>
          </View>
          <Image source={require("@src/assets/arrow-right.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(appScreenNames.VIEW_BANK);
          }}
          style={styles.otherSettingsOptionsContainer}
        >
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name="lock" size={24} color="#ffffff" />
            </View>
            <SemiBoldText sizeBody black>
              Biometrics login
            </SemiBoldText>
          </View>
          <Image source={require("@src/assets/arrow-right.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(appScreenNames.VIEW_BANK);
          }}
          style={styles.otherSettingsOptionsContainer}
        >
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name="lock" size={24} color="#ffffff" />
            </View>
            <SemiBoldText sizeBody black>
              Privacy policy
            </SemiBoldText>
          </View>
          <Image source={require("@src/assets/arrow-right.png")} />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  otherSettingsOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 12,
  },
  otherSettingsOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#1C1C1C",
  },
});
