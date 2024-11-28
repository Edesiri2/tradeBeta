import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "../Screen";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SemiBoldText } from "@src/components/shared/text";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { useState } from "react";
import { moderateScale } from "@src/resources/scaling";

export const Security = ({
  navigation,
}: RootStackScreenProps<appScreenNames.SECURITY>) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Screen>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: moderateScale(16),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require("@src/assets/arrow-left.png")} />
        </TouchableOpacity>
        <Text style={styles.h1}>Security</Text>
      </View>

      <View style={{ marginTop: moderateScale(41), gap: moderateScale(11) }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(appScreenNames.CHANGE_PASSWORD);
          }}
          style={styles.otherSettingsOptionsContainer}>
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name='lock' size={moderateScale(24)} color='#ffffff' />
            </View>
            <SemiBoldText sizeBody black>
              Change password
            </SemiBoldText>
          </View>
          <Image source={require("@src/assets/arrow-right.png")} />
        </TouchableOpacity>
        <View style={styles.otherSettingsOptionsContainer}>
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name='lock' size={moderateScale(24)} color='#ffffff' />
            </View>
            <SemiBoldText sizeBody black>
              Biometrics login
            </SemiBoldText>
          </View>
          <Switch
            trackColor={{ false: "#E0E0E0", true: "#DB3A09" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#DB3A09"}
            ios_backgroundColor='#f4f3f4'
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate(appScreenNames.VIEW_BANK);
          }}
          style={styles.otherSettingsOptionsContainer}>
          <View style={styles.otherSettingsOptions}>
            <View style={styles.icon}>
              <Icon name='lock' size={24} color='#ffffff' />
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
    gap: moderateScale(10),
    marginVertical: moderateScale(12),
  },
  otherSettingsOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    // padding: 8,
    backgroundColor: "#DB3A09",
    borderRadius: moderateScale(40) / 2,
    color: "#FFFFFF",
    width: moderateScale(40),
    height: moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    lineHeight: moderateScale(30),
    color: "#1C1C1C",
  },
});
