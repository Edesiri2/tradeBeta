import React from "react";
import { BottomTabBarScreenProps } from "@src/router/types";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { SemiBoldText } from "@src/components/shared/text";
import { Platform } from "react-native";
import { moderateScale, verticalScale } from "@src/resources/scaling";

export const Settings = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.SETTINGS>) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h3}>Profile Settings</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(appScreenNames.EDIT_PROFILE);
            }}>
            <Icon name='edit' size={24} color='#252525' />
          </TouchableOpacity>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.img}></View>
          <Text style={styles.h4}>Yemi Green</Text>
          {/* <SemiBoldText sizeBody black>Yemi Green</SemiBoldText> */}
          <Text>Yemi.green@gmail.com</Text>
        </View>
      </View>

      <View style={styles.otherSettings}>
        <View style={styles.container1}>
          <Text style={styles.h3}>Other settings</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(appScreenNames.VIEW_BANK);
            }}
            style={styles.otherSettingsOptionsContainer}>
            <View style={styles.otherSettingsOptions}>
              <View style={styles.icon}>
                <Icon name='lock' size={24} color='#ffffff' />
              </View>
              <SemiBoldText sizeBody black>
                My banks
              </SemiBoldText>
            </View>
            <Image source={require("@src/assets/arrow-right.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(appScreenNames.SECURITY)}
            style={styles.otherSettingsOptionsContainer}>
            <View style={styles.otherSettingsOptions}>
              <View style={styles.icon}>
                <Icon name='lock' size={24} color='#ffffff' />
              </View>
              <SemiBoldText sizeBody black>
                Security
              </SemiBoldText>
            </View>
            <Image source={require("@src/assets/arrow-right.png")} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.otherSettingsOptionsContainer}>
            <View style={styles.otherSettingsOptions}>
              <View style={styles.icon}>
                <Icon name="lock" size={24} color="#ffffff" />
              </View>
              <SemiBoldText sizeBody black>
                Themes
              </SemiBoldText>
            </View>
            <Image source={require("@src/assets/arrow-right.png")} />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(appScreenNames.NOTIFICATION_SETTINGS)
            }
            style={styles.otherSettingsOptionsContainer}>
            <View style={styles.otherSettingsOptions}>
              <View style={styles.icon}>
                <Icon name='lock' size={24} color='#ffffff' />
              </View>
              <SemiBoldText sizeBody black>
                Notifications
              </SemiBoldText>
            </View>
            <Image source={require("@src/assets/arrow-right.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherSettingsOptionsContainer}>
            <View style={styles.otherSettingsOptions}>
              <View style={styles.icon}>
                <Icon name='lock' size={24} color='#ffffff' />
              </View>
              <SemiBoldText sizeBody black>
                Help Center
              </SemiBoldText>
            </View>
            <Image source={require("@src/assets/arrow-right.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherSettingsOptionsContainer}>
            <View style={styles.otherSettingsOptions}>
              <View style={styles.icon}>
                <Icon name='lock' size={24} color='#ffffff' />
              </View>
              <SemiBoldText sizeBody black>
                Contact us
              </SemiBoldText>
            </View>
            <Image source={require("@src/assets/arrow-right.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherSettingsOptionsContainer}>
            <View style={styles.otherSettingsOptions}>
              <View style={styles.icon}>
                <Icon name='lock' size={24} color='#ffffff' />
              </View>
              <SemiBoldText sizeBody black>
                Log out
              </SemiBoldText>
            </View>
            <Image source={require("@src/assets/arrow-right.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main_light_color,
    paddingTop:
      Platform.OS === "ios" ? verticalScale(35) : StatusBar.currentHeight,
    paddingHorizontal: moderateScale(21),
    paddingBottom: moderateScale(54),
  },
  container1: {
    paddingVertical: 15,
    paddingHorizontal: 21,
  },
  h3: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    color: "#252525",
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
    color: "#252525",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  userDetails: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 35,
  },
  img: {
    width: 64,
    height: 68.73,
    borderRadius: 64 / 2,
    backgroundColor: "#252525",
    marginBottom: 5,
  },
  otherSettings: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  otherSettingsOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 20,
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
});
