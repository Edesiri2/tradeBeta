import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Dimensions,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Button, ButtonOutline } from "@src/components/shared/button";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/naviagtion-names";
import { CheckBox } from "@src/common";
import { Screen } from "../Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  referralCode: Yup.string().optional(),
});

const { height } = Dimensions.get("window");

export const RegistrationForm = ({
  navigation,
}: AuthScreenProps<authScreenNames.REGISTRATION_FORM>) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleContinue = () => {
    if (termsAccepted) {
      setModalVisible(true);
    }
  };

  return (
    <Screen>
      <View style={{ marginLeft: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <MaterialIcons name='arrow-back-ios' size={24} color='#CBA78C' />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Register your account</Text>
        <Text style={styles.subtitle}>
          Complete the sign up to get started.
        </Text>

        <Formik
          initialValues={{ email: "", password: "", referralCode: "" }}
          validationSchema={validationSchema}
          onSubmit={handleContinue}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <FontAwesome
                  name='envelope'
                  size={24}
                  color='#000'
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType='email-address'
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <FontAwesome
                  name='lock'
                  size={24}
                  color='#000'
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Password'
                  secureTextEntry={!passwordVisible}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.iconButton}>
                  <MaterialIcons
                    name={passwordVisible ? "visibility" : "visibility-off"}
                    size={24}
                    color='#900000'
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Text style={styles.label}>Referral Code</Text>
              <View style={styles.inputContainer}>
                <FontAwesome
                  name='tag'
                  size={24}
                  color='#000'
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Enter a referral code'
                  value={values.referralCode}
                  onChangeText={handleChange("referralCode")}
                  onBlur={handleBlur("referralCode")}
                />
              </View>
              <View style={{ marginTop: 100 }}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    isChecked={termsAccepted}
                    onToggle={() => setTermsAccepted(!termsAccepted)}
                  />
                  <Text style={styles.checkboxLabel}>
                    By signing up, you agree to the{" "}
                    <Text style={styles.link}>Terms of Service</Text> and{" "}
                    <Text style={styles.link}>Privacy Policy</Text>.
                  </Text>
                </View>

                <View style={{ alignItems: "center", marginBottom: 16 }}>
                  {termsAccepted ? (
                    <ButtonOutline
                      title='Continue'
                      sizeBody
                      textMainColor
                      borderMainColor
                      onPress={handleSubmit}
                      disabled={!termsAccepted}
                    />
                  ) : (
                    <Button
                      title='Continue'
                      sizeBody
                      textWhite
                      bgMainColor
                      onPress={handleSubmit}
                      disabled={!termsAccepted}
                    />
                  )}
                </View>
              </View>
            </>
          )}
        </Formik>

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name='check-circle-outline'
                size={100}
                color='green'
              />
              <View style={{ marginVertical: 20 }}>
                <Text style={styles.modalTitle}>Verification Email Sent!</Text>
                <Text style={styles.modalMessage}>
                  Check your email and click the link to verify your email
                  address
                </Text>
              </View>
              <Button
                title='Continue'
                sizeBody
                textWhite
                bgMainColor
                onPress={() => {
                  navigation.navigate(authScreenNames.USER_CATEGORIES),
                    setModalVisible(false);
                }}
              />
              <ButtonOutline
                title='Check Email'
                sizeBody
                textMainColor
                borderMainColor
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  backButton: {
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DB3A09",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#707070",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderColor: "gray",
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    borderRadius: 20,
  },
  iconButton: {
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#707070",
  },
  link: {
    color: "#900000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: height / 2,
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
  closeButton: {
    padding: 10,
    backgroundColor: "#900000",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
  },
});
