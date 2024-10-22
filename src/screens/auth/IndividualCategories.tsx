import React, { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialIcons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";

// Define form values interface
interface PersonalInfoFormValues {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  nin: string;
  country: string;
  state: string;
  city: string;
  localGovt: string;
  addressLine: string;
  postalCode: string;
}
type AddressFieldKeys = "city" | "localGovt" | "addressLine" | "postalCode";

// Validation schema
const PersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  nin: Yup.string().required("National Identification Number is required"),
});

const AddressSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  localGovt: Yup.string().required("Local Government is required"),
  addressLine: Yup.string().required("Address Line is required"),
  postalCode: Yup.string().required("Postal Code is required"),
});

// Main component
export const IndividualCategories: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<PersonalInfoFormValues>({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    nin: "",
    country: "",
    state: "",
    city: "",
    localGovt: "",
    addressLine: "",
    postalCode: "",
  });

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility state
  const cameraRef = useRef<any>(null); // Camera reference

  const navigation = useNavigation();

  // Handle permission logic
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title='Grant Permission' />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // setPhotoUri(photo.uri);
      setPhotoUri(photo.uri); // Save the photo URI
      setModalVisible(true);
      // navigation.navigate('CaptureScreen', { photoUri: photo.uri });
      console.log({ photoUri: photo.uri });
    }
  };
  const confirmPhoto = () => {
    setModalVisible(false); // Hide the modal after confirmation
    // Continue with other logic if needed
  };

  // Handle next step
  const handleNextStep = (values: PersonalInfoFormValues) => {
    setFormValues((prev) => ({ ...prev, ...values }));
    if (step < 3) setStep(step + 1);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Complete Form Values:", formValues);
  };

  // Render content based on the current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoForm
            initialValues={formValues}
            onNext={handleNextStep}
          />
        );
      case 2:
        return (
          <AddressForm initialValues={formValues} onNext={handleNextStep} />
        );
      case 3:
        return (
          <View style={styles.formContainer}>
            <Text style={styles.headerText}>Image Capture</Text>
            <Text style={{ marginVertical: 10, fontSize: 16 }}>
              We use your selfie to compare with your photo
            </Text>
            <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={toggleCameraFacing}>
                <Ionicons name='camera-reverse' size={36} color='#DB3A09' />
              </TouchableOpacity>
            </View>

            <Modal
              animationType='slide'
              transparent={true}
              visible={isModalVisible}
              onRequestClose={() => setModalVisible(false)}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Capturing...</Text>

                  {photoUri && (
                    <Image
                      source={{ uri: photoUri }}
                      style={styles.capturedImageModal}
                    />
                  )}

                  <View style={styles.iconTextContainer}>
                    <TouchableOpacity
                      onPress={confirmPhoto}
                      style={styles.iconOutlineButton}>
                      <Ionicons
                        name='camera-reverse-outline'
                        size={20}
                        color='#DB3A09'
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Take another selfie</Text>
                  </View>

                  <TouchableOpacity
                    onPress={confirmPhoto}
                    style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>Complete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <View style={styles.buttonContainer}>
              {/* <PrimaryBtn type="solid" title="Continue" onPress={takePicture} /> */}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  // Render breadcrumb navigation
  const renderBreadcrumbs = () => {
    const steps = [
      { label: "Personal Info", index: 1 },
      { label: "Address", index: 2 },
      { label: "ID Verification", index: 3 },
    ];

    return (
      <View style={styles.breadcrumbContainer}>
        {steps.map((item) => (
          <View key={item.index} style={styles.breadcrumbItem}>
            <Text
              style={[
                styles.breadcrumbText,
                step === item.index ? styles.activeText : {},
              ]}>
              {item.label}
            </Text>
            {step === item.index ? (
              <MaterialIcons name='check-circle' size={24} color='#DB3A09' />
            ) : (
              <MaterialIcons name='circle' size={24} color='#DB3A09' />
            )}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderBreadcrumbs()}
      {renderStepContent()}
      <View style={styles.buttonContainer}>
        {/* {step < 3 && (
        //   <PrimaryBtn
        //     type="solid"
        //     title="Continue"
        //     onPress={() => handleNextStep(formValues)}
        //   />
        )} */}
      </View>
    </View>
  );
};

// Personal Info Form Component
const PersonalInfoForm: React.FC<{
  initialValues: PersonalInfoFormValues;
  onNext: (values: PersonalInfoFormValues) => void;
}> = ({ initialValues, onNext }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PersonalInfoSchema}
      onSubmit={onNext}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          {(
            ["firstName", "lastName", "mobileNumber", "nin"] as Array<
              keyof PersonalInfoFormValues
            >
          ).map((field) => (
            <View key={field}>
              <Text style={styles.label}>
                {field.charAt(0).toUpperCase() +
                  field
                    .slice(1)
                    .replace(/([A-Z])/g, " $1")
                    .trim()}
              </Text>
              <TextInput
                style={styles.input}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                onChangeText={handleChange(field)}
                onBlur={handleBlur(field)}
                value={values[field]}
              />
              {touched[field] && errors[field] && (
                <Text style={styles.errorText}>{errors[field]}</Text>
              )}
            </View>
          ))}

          {/* <View style={styles.buttonContainer}>
            <PrimaryBtn type="solid" title="Next" onPress={handleSubmit} />
          </View> */}
        </View>
      )}
    </Formik>
  );
};

// Address Form Component
const AddressForm: React.FC<{
  initialValues: PersonalInfoFormValues;
  onNext: (values: PersonalInfoFormValues) => void;
}> = ({ initialValues, onNext }) => {
  const countries = ["Nigeria", "Ghana"];
  const states: { [key: string]: string[] } = {
    Nigeria: ["Lagos", "Abuja", "Rivers", "Kano", "Oyo"],
    Ghana: ["Greater Accra", "Ashanti", "Western", "Eastern", "Northern"],
  };

  const localGovts: { [key: string]: string[] } = {
    Lagos: ["Ikeja", "Lekki", "Victoria Island"],
    Abuja: ["Abuja Municipal", "Gwagwalada"],
    Rivers: ["Port Harcourt", "Obio-Akpor"],
    Kano: ["Kano Municipal", "Nassarawa"],
    Oyo: ["Ibadan North", "Akinyele"],
    "Greater Accra": ["Accra", "Tema"],
    Ashanti: ["Kumasi", "Obuasi"],
    Western: ["Sekondi", "Shama"],
    Eastern: ["Koforidua", "Begoro"],
    Northern: ["Tamale", "Buipe"],
  };

  function handleSubmit(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddressSchema}
      onSubmit={onNext}>
      {({
        handleChange,
        handleBlur,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <View>
          <Text style={styles.addressTitle}>Home Address</Text>
          <Text style={styles.addressDesc}>
            It is CBN standard guidelines to get KYC (Know Your Customer)
            information for all customers.
          </Text>

          {/* Country Dropdown */}
          <View>
            <Text style={styles.label}>Country</Text>
            <Dropdown
              style={styles.input}
              data={countries.map((country) => ({
                label: country,
                value: country,
              }))}
              onChange={(item) => {
                setFieldValue("country", item.value);
                setFieldValue("state", ""); // Reset state and city when country changes
                setFieldValue("city", "");
                setFieldValue("localGovt", "");
              }}
              labelField='label'
              valueField='value'
              value={values.country}
              placeholder='Select country'
            />
            {touched.country && errors.country && (
              <Text style={styles.errorText}>{errors.country}</Text>
            )}
          </View>

          {/* State Dropdown */}
          <View>
            <Text style={styles.label}>State</Text>
            <Dropdown
              style={styles.input}
              data={
                states[values.country]?.map((state) => ({
                  label: state,
                  value: state,
                })) || []
              }
              onChange={(item) => {
                setFieldValue("state", item.value);
                setFieldValue("city", ""); // Reset city when state changes
                setFieldValue("localGovt", "");
              }}
              labelField='label'
              valueField='value'
              value={values.state}
              placeholder='Select state'
            />
            {touched.state && errors.state && (
              <Text style={styles.errorText}>{errors.state}</Text>
            )}
          </View>

          {/* City and Local Government Fields */}
          {(["addressLine", "postalCode"] as AddressFieldKeys[]).map(
            (field) => (
              <View key={field}>
                <Text style={styles.label}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  onChangeText={handleChange(field)}
                  onBlur={handleBlur(field)}
                  value={values[field]}
                />
              </View>
            )
          )}

          {/* <View style={styles.buttonContainer}>
            <PrimaryBtn type="solid" title="Next" onPress={handleSubmit} />
          </View> */}
        </View>
      )}
    </Formik>
  );
};

const CaptureScreen: React.FC<{ route: any }> = ({ route }) => {
  const { photoUri } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Captured Photo</Text>
      {photoUri && (
        <Image
          source={{ uri: photoUri }}
          style={{ width: "100%", height: 400 }}
        />
      )}
    </View>
  );
};
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  iconTextContainer: {
    flexDirection: "row", // Set layout to row
    justifyContent: "center",
    alignItems: "center", // Align both elements centrally
    marginBottom: 20, // Margin between icon + text and the button
  },
  iconOutlineButton: {
    borderWidth: 2, // Border for outline effect
    borderColor: "#DB3A09",
    borderRadius: 50, // Rounded border
    padding: 8, // Add padding inside the button
    marginRight: 8, // Space between icon and text
  },
  iconText: {
    fontSize: 16,
    color: "#DB3A09",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#DB3A09",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 350, // Adjusted width for more space
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 30, // Increased padding
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#DB3A09",
  },
  capturedImageModal: {
    width: 250, // Increased image size
    height: 250,
    borderRadius: 10,
    marginBottom: 25, // Adjusted margin for spacing
  },
  confirmButton: {
    backgroundColor: "#DB3A09",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  breadcrumbContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  breadcrumbItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  breadcrumbText: {
    fontSize: 16,
    marginRight: 5,
  },
  activeText: {
    fontWeight: "bold",
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addressDesc: {
    fontSize: 14,
    marginBottom: 10,
  },
  capturedImageContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  capturedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderColor: "#DB3A09",
    borderWidth: 2,
  },
  camera: {
    height: 400,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
