import { SelectionModal } from "@src/common";
import { useSelectionModal } from "@src/common/hooks/useSelectionModal";
import { TextInputs } from "@src/components/shared/input/Input";
import { countries } from "@src/contants/countries";
import { screenWidth } from "@src/resources/scaling";
import { ScrollContainer } from "@src/screens/Scroll-Container";
import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";

type addressFrmProps = {
  useFormProps: any;
};

export const Address: React.FC<addressFrmProps> = ({ useFormProps }) => {
  const props = useFormProps;
  const {
    modalVisible,
    setModalVisible,
    selectedModalValue,
    setSelectedModalValue,
  } = useSelectionModal();
  return (
    <>
      <ScrollContainer style={{}} height={"63%"}>
        <Controller
          control={props?.control}
          render={({ field }) => (
            <TextInputs
              label='Country'
              placeholder='select your country'
              iconName='earth'
              iconFamily='Fontisto'
              error={props?.errors?.country?.message}
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
              showErrorText
              dropDown
              onPressDropDown={() => setModalVisible(!modalVisible)}
            />
          )}
          name='country'
          defaultValue=''
        />

        <Controller
          control={props?.control}
          render={({ field }) => (
            <TextInputs
              label='State/City'
              placeholder='select state or city'
              iconName='location-pin'
              iconFamily='Entypo'
              error={props?.errors?.state?.message}
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
              showErrorText
              // dropDown
            />
          )}
          name='state'
          defaultValue=''
        />

        <Controller
          control={props?.control}
          render={({ field }) => (
            <TextInputs
              label='Local Government Area'
              placeholder='select local govt.'
              iconName='house'
              iconFamily='MaterialIcons'
              error={props?.errors?.local_govt?.message}
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
              showErrorText
              // dropDown
            />
          )}
          name='local_govt'
          defaultValue=''
        />

        <Controller
          control={props?.control}
          render={({ field }) => (
            <TextInputs
              label='Address Line'
              placeholder='Enter your full address.'
              iconName='contacts'
              iconFamily='AntDesign'
              error={props?.errors?.address_line?.message}
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
              showErrorText
            />
          )}
          name='address_line'
          defaultValue=''
        />

        <Controller
          control={props?.control}
          render={({ field }) => (
            <TextInputs
              label='Postal Code'
              placeholder='Enter postal code.'
              iconName='qrcode'
              iconFamily='AntDesign'
              error={props?.errors?.postal_code?.message}
              value={field.value}
              onChangeText={(value) => field.onChange(value)}
              showErrorText
            />
          )}
          name='postal_code'
          defaultValue=''
        />
      </ScrollContainer>
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
            data={countries}
            modalOpened={modalVisible}
            setModalOpened={() => {
              setModalVisible(!modalVisible);
            }}
            closeModal={() => {
              setModalVisible(!modalVisible);
            }}
            setSelectedValue={(value) => {
              setSelectedModalValue(value);
              props?.setValues("country", value);
            }}
            selectedValue={selectedModalValue}
            title='Select Country'
          />
        </View>
      )}
    </>
  );
};
