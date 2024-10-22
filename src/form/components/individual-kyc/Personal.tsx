import { TextInputs } from "@src/components/shared/input/Input";
import { ScrollContainer } from "@src/screens/Scroll-Container";
import React from "react";
import { Controller } from "react-hook-form";

type personalFrmProps = {
  useFormProps: any;
};

export const Personal: React.FC<personalFrmProps> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <ScrollContainer style={{}} height={"63%"}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <TextInputs
            label='First Name'
            placeholder='enter first name'
            iconName='user'
            iconFamily='Entypo'
            error={props?.errors?.first_name?.message}
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            showErrorText
          />
        )}
        name='first_name'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <TextInputs
            label='Last Name'
            placeholder='enter last name'
            iconName='user'
            iconFamily='Entypo'
            error={props?.errors?.last_name?.message}
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            showErrorText
          />
        )}
        name='last_name'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <TextInputs
            label='Mobile Number'
            placeholder='enter your mobile number'
            iconName='phone'
            iconFamily='FontAwesome'
            error={props?.errors?.mobile_number?.message}
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            showErrorText
            phoneNumberInput
          />
        )}
        name='mobile_number'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <TextInputs
            label='NIN'
            placeholder='enter your NIN'
            iconName='address-card'
            iconFamily='FontAwesome5'
            error={props?.errors?.nin?.message}
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            showErrorText
            numberInput
          />
        )}
        name='nin'
        defaultValue=''
      />
    </ScrollContainer>
  );
};
