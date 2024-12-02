import { auth } from "@src/api/endpoint/endpoint";
import { Post } from "@src/api/request";
import { useState } from "react";
import { Alert } from "react-native";

type payloadType = {
  email: string;
  phone_code: string;
  phone: string;
  lastname: string;
  firstname: string;
  account_type: string;
  country: string;
  state: string;
  zip_code: string;
  city: string;
  address: string;
  referral_user_code: string;
  password: string;
  password_confirmation: string;
  passport_photograph: {
    type: string;
    name: string;
    uri: string;
  };
  id_type: string;
  id_number: string;
  id_back_part: {
    type: string;
    name: string;
    uri: string;
  };
  id_front_part: {
    type: string;
    name: string;
    uri: string;
  };
  cac_registration_number: string;
  cac_registration_doc: {
    type: string;
    name: string;
    uri: string;
  };
  agree: string;
};

export const useIndividualCategories = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const submitFormData = async (payload: payloadType) => {
    setSubmitting(true);
    const formData = new FormData();
    formData.append("email", payload.email);
    formData.append("phone_code", payload.phone_code);
    formData.append("phone", payload.phone);
    formData.append("lastname", payload.lastname);
    formData.append("firstname", payload.firstname);
    formData.append("account_type", payload.account_type);
    formData.append("country", payload.country);
    formData.append("state", payload.state);
    formData.append("zip_code", payload.zip_code);
    formData.append("city", payload.city);
    formData.append("address", payload.address);
    formData.append("referral_user_code", payload.referral_user_code);
    formData.append("password", payload.password);
    formData.append("password_confirmation", payload.password_confirmation);
    formData.append("id_type", payload.id_type);
    formData.append("id_number", payload.id_number);
    formData.append("cac_registration_number", payload.cac_registration_number);
    formData.append("agree", payload.agree);
    formData.append("passport_photograph", {
      uri: payload.passport_photograph.uri,
      type: payload.passport_photograph.type, // or the appropriate MIME type
      name: payload.passport_photograph.name,
    } as unknown as Blob);
    formData.append("id_back_part", {
      uri: payload.id_back_part.uri,
      type: payload.id_back_part.type, // or the appropriate MIME type
      name: payload.id_back_part.name,
    } as unknown as Blob);
    formData.append("id_front_part", {
      uri: payload.id_front_part.uri,
      type: payload.id_front_part.type, // or the appropriate MIME type
      name: payload.id_front_part.name,
    } as unknown as Blob);
    formData.append("cac_registration_doc", {
      uri: payload.cac_registration_doc.uri,
      type: payload.cac_registration_doc.type, // or the appropriate MIME type
      name: payload.cac_registration_doc.name,
    } as unknown as Blob);
    try {
      const { status, data } = await Post(auth.REGISTER, formData, {
        "Content-Type": "multipart/form-data",
      });
      if (status === 200) {
        if (data?.data?.message?.error) {
          Alert.alert("Error", "There's an error");
          console.log(data?.data);
        } else {
          Alert.alert("Success", "User registered successfully");
        }
      } else {
        Alert.alert("Error", "Error processing request");
      }
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setSubmitting(false);
    }
  };

  return {
    submitFormData,
    submitting,
  };
};
