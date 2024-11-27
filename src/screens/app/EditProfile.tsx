import React from "react";
import { colors } from "@src/resources/colors";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import { Controller, useForm } from "react-hook-form";
import { TextInputs } from "@src/components/shared/input/Input";
import { addBankTypes } from "@src/form/schema/types";

export const EditProfile = ({
  navigation,
}: RootStackScreenProps<appScreenNames.EDIT_PROFILE>) => {
  const {
    setValue,
    control,
    formState: { errors },
  } = useForm<addBankTypes>({
    mode: "onChange",
    // resolver: yupResolver(addBankSchema),
  });
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require("@src/assets/arrow-left.png")} />
          </TouchableOpacity>
          <Text style={styles.h1}>Edit Profile</Text>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.img}></View>
        </View>
      </View>
      <View style={{ paddingTop: 40, paddingHorizontal: 18 }}>
        <View style={{  }}>
          <View>
            <View style={{ width: 350 }}>
              <Controller
                control={control}
                name="account_number"
                defaultValue=""
                render={({ field }) => (
                  <TextInputs
                    label="Full Name"
                    placeholder=""
                    iconName="user"
                    iconFamily="FontAwesome"
                    error={errors?.account_number?.message}
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                    showErrorText
                  />
                )}
              />
            </View>
            <View style={{ width: 350 }}>
              <Controller
                control={control}
                name="account_number"
                defaultValue=""
                render={({ field }) => (
                  <TextInputs
                    label="Email"
                    placeholder=""
                    iconName="email"
                    iconFamily="MaterialIcons"
                    error={errors?.account_number?.message}
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                    showErrorText
                  />
                )}
              />
            </View>
            <View style={{ width: 350 }}>
              <Controller
                control={control}
                name="account_number"
                defaultValue=""
                render={({ field }) => (
                  <TextInputs
                    label="Mobile Number"
                    placeholder=""
                    iconName="phone"
                    iconFamily="FontAwesome"
                    error={errors?.account_number?.message}
                    value={field.value}
                    onChangeText={(value) => field.onChange(value)}
                    showErrorText
                  />
                )}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main_light_color,
    paddingTop: 58,
    paddingHorizontal: 21,
    paddingBottom: 54,
  },
  container1: {
    paddingVertical: 15,
    paddingHorizontal: 21,
  },
  addBtn: {
    backgroundColor: "#DB3A09",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 20,
    marginTop: 97,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#1C1C1C",
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
