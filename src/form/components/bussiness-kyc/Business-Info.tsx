import { TextInputs } from "@src/components/shared/input/Input";
import { ScrollContainer } from "@src/screens/Scroll-Container";
import React from "react";
import { Controller } from "react-hook-form";

type personalFrmProps = {
  useFormProps: any;
};

export const BusinessInfo: React.FC<personalFrmProps> = ({ useFormProps }) => {
  const props = useFormProps;
  return (
    <ScrollContainer style={{}} height={"63%"}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <TextInputs
            label='Business Name'
            placeholder='enter business name'
            iconName='shopping-bag'
            iconFamily='FontAwesome'
            error={props?.errors?.business_name?.message}
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            showErrorText
          />
        )}
        name='business_name'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <TextInputs
            label='Class of Business'
            placeholder='enter business class'
            iconName='tags'
            iconFamily='AntDesign'
            error={props?.errors?.business_class?.message}
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            showErrorText
          />
        )}
        name='business_class'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <TextInputs
            label='Business Number'
            placeholder='enter business number'
            iconName='phone'
            iconFamily='FontAwesome'
            error={props?.errors?.business_number?.message}
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            showErrorText
            phoneNumberInput
          />
        )}
        name='business_number'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <TextInputs
            label='CAC Reg. No.'
            placeholder='enter CAC reg no.'
            iconName='address-card'
            iconFamily='FontAwesome5'
            error={props?.errors?.cac_reg_number?.message}
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            showErrorText
            numberInput
          />
        )}
        name='cac_reg_number'
        defaultValue=''
      />
    </ScrollContainer>
  );
};
