import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { addBankTypes } from "@src/form/schema/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { addBankSchema } from "@src/form/validation/rules";
import { TextInputs } from "@src/components/shared/input/Input";
import { useSelectionModal } from "@src/common/hooks/useSelectionModal";
import { screenWidth } from "@src/resources/scaling";
import { SelectionModal } from "@src/common";
import { nigeriaBanks } from "@src/contants/banks";

export const AddBank = ({
  navigation,
}: RootStackScreenProps<appScreenNames.ADD_BANK>) => {
  const {
    modalVisible,
    setModalVisible,
    selectedModalValue,
    setSelectedModalValue,
  } = useSelectionModal();
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<addBankTypes>({
    mode: "onChange",
    resolver: yupResolver(addBankSchema),
  });
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

          <View style={{ width: 350 }}>
            <Controller
              control={control}
              name="bank_name"
              defaultValue=""
              render={({ field }) => (
                <TextInputs
                  label="Bank name"
                  placeholder="Select your bank"
                  iconName="swatchbook"
                  iconFamily="FontAwesome6"
                  error={errors?.bank_name?.message}
                  value={field.value}
                  onChangeText={(value) => field.onChange(value)}
                  showErrorText
                  dropDown
                  onPressDropDown={() => setModalVisible(!modalVisible)}
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
                  label="Account number"
                  placeholder="6565775875"
                  iconName="location-pin"
                  iconFamily="Entypo"
                  error={errors?.account_number?.message}
                  value={field.value}
                  onChangeText={(value) => field.onChange(value)}
                  showErrorText
                />
              )}
            />
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
      {modalVisible && (
        <View
          style={{
            zIndex: 50,
            height: "110%",
            width: screenWidth,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SelectionModal
            data={nigeriaBanks}
            modalOpened={modalVisible}
            setModalOpened={() => {
              setModalVisible(!modalVisible);
            }}
            closeModal={() => {
              setModalVisible(!modalVisible);
            }}
            setSelectedValue={(value) => {
              setSelectedModalValue(value);
              setValue("bank_name", value);
            }}
            selectedValue={selectedModalValue}
            title="Select Bank"
          />
        </View>
      )}
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
});
