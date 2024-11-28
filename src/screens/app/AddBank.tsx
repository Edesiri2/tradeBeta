import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { Screen } from "../Screen";
import {
  Image,
  Modal,
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
import {
  DVH,
  DVW,
  moderateScale,
  screenHeight,
  screenWidth,
} from "@src/resources/scaling";
import { SelectionModal } from "@src/common";
import { nigeriaBanks } from "@src/contants/banks";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "@src/components/shared/button";

export const AddBank = ({
  navigation,
}: RootStackScreenProps<appScreenNames.ADD_BANK>) => {
  const {
    modalVisible,
    setModalVisible,
    selectedModalValue,
    setSelectedModalValue,
  } = useSelectionModal();
  const [showModal, setShowModal] = useState<boolean>(false);
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
            }}>
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
            }}>
            Please make sure the account is primarily yours and corresponds with
            your Tradebeta details.
          </Text>

          {/* <View style={{ width: 350 }}> */}
          <Controller
            control={control}
            name='bank_name'
            defaultValue=''
            render={({ field }) => (
              <TextInputs
                label='Bank name'
                placeholder='Select your bank'
                iconName='swatchbook'
                iconFamily='FontAwesome6'
                error={errors?.bank_name?.message}
                value={field.value}
                onChangeText={(value) => field.onChange(value)}
                showErrorText
                dropDown
                onPressDropDown={() => setModalVisible(!modalVisible)}
                inputStyle={{
                  width: DVW(94),
                }}
              />
            )}
          />
          {/* </View> */}
          {/* <View style={{ width: 350 }}> */}
          <Controller
            control={control}
            name='account_number'
            defaultValue=''
            render={({ field }) => (
              <TextInputs
                label='Account number'
                placeholder='6565775875'
                iconName='location-pin'
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
        </View>
        {/* </View> */}

        <Button
          title='Save Bank'
          bgMainColor
          textWhite
          sizeBody
          onPress={() => {
            setShowModal(!showModal);
          }}
          style={{
            width: "100%",
          }}
        />

        {/* <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            setShowModal(!showModal);
          }}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 16,
              lineHeight: 24,
            }}>
            Save bank
          </Text>
        </TouchableOpacity> */}
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
          }}>
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
            title='Select Bank'
          />
        </View>
      )}

      <Modal
        animationType='slide'
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='check-circle-outline'
              size={100}
              color='green'
            />
            <View style={{ marginVertical: moderateScale(20) }}>
              <Text style={styles.modalTitle}>Bank Added Successfully!</Text>
              <Text style={styles.modalMessage}>
                A new bank account has been added for your withdrawals
              </Text>
            </View>
            <Button
              title='Continue'
              bgMainColor
              sizeBody
              textWhite
              style={{
                width: "100%",
              }}
              onPress={() => {
                setShowModal(!showModal);
                navigation.navigate(appScreenNames.VIEW_BANK);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    lineHeight: moderateScale(30),
    color: "#1C1C1C",
  },
  mainDiv: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: moderateScale(38),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: screenHeight / 2,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ff4500",
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
