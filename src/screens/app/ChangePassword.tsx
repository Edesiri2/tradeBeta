import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "../Screen";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { TextInputs } from "@src/components/shared/input/Input";
import { addBankTypes } from "@src/form/schema/types";
import { DVW } from "@src/resources/scaling";
import { Button } from "@src/components/shared/button";

export const ChangePassword = ({
  navigation,
}: RootStackScreenProps<appScreenNames.CHANGE_PASSWORD>) => {
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<addBankTypes>({
    mode: "onChange",
    // resolver: yupResolver(addBankSchema),
  });
  return (
    <Screen>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require("@src/assets/arrow-left.png")} />
        </TouchableOpacity>
        <Text style={styles.h1}>Change Password</Text>
      </View>
      <View style={{ marginTop: 41, gap: 64, flex: 1 }}>
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", lineHeight: 28.8 }}>
            Enter your current password
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "400", lineHeight: 24 }}>
            Kindly enter your current password for your Tradebeta account.
          </Text>
        </View>
        <View>
          {/* <View style={{ width: 350 }}> */}
          <Controller
            control={control}
            name='account_number'
            defaultValue=''
            render={({ field }) => (
              <TextInputs
                label='Current Password'
                placeholder='********'
                iconName='lock'
                iconFamily='Entypo'
                error={errors?.account_number?.message}
                value={field.value}
                onChangeText={(value) => field.onChange(value)}
                showErrorText
                inputStyle={{
                  width: DVW(94),
                }}
              />
            )}
          />
          {/* </View> */}
        </View>
      </View>

      <Button
        title='Continue'
        bgMainColor
        textWhite
        sizeBody
        onPress={() => {
          navigation.navigate(appScreenNames.NEW_PASSWORD);
        }}
        style={{
          width: "100%",
        }}
      />
      {/* <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          navigation.navigate(appScreenNames.NEW_PASSWORD);
        }}>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 24,
          }}>
          Continue
        </Text>
      </TouchableOpacity> */}
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
  addBtn: {
    backgroundColor: "#DB3A09",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 20,
  },
});
