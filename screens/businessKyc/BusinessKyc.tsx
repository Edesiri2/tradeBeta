import React, { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryBtn from "../../components/utils/PrimaryBtn";
import { MaterialIcons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";

// Define form values interfaces
interface BusinessKycValues {
  businessName: string;
  businessNumber: string;
  cacNumber: string;
  businessClass: string;
  country: string;
  state: string;
  city: string;
  localGovt: string;
  addressLine: string;
  postalCode: string;
}
type AddressFieldKeys = "city" | "localGovt" | "addressLine" | "postalCode";

// Validation schemas
const BusinessKycSchema = Yup.object().shape({
  businessName: Yup.string().required("Business Name is required"),
  businessNumber: Yup.string().required("Business Number is required"),
  cacNumber: Yup.string().required("CAC Number is required"),
  businessClass: Yup.string().required("Business Class is required"),
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
const BusinessKyc: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<BusinessKycValues>({
    businessName: "",
    businessNumber: "",
    cacNumber: "",
    businessClass: "",
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
  const [isModalVisible, setModalVisible] = useState(false);
  const cameraRef = useRef<any>(null);
  const navigation = useNavigation();

  // Handle permission logic
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      setModalVisible(true);
    }
  };

  const confirmPhoto = () => {
    setModalVisible(false);
    // Continue with other logic if needed
  };

  const handleNextStep = (values: BusinessKycValues) => {
    setFormValues((prev) => ({ ...prev, ...values }));
    if (step < 3) setStep(step + 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <BusinessKycForm
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
            <Text style={styles.headerText}>ID Verification</Text>
            <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={toggleCameraFacing}>
                <Ionicons name="camera-reverse" size={36} color="#DB3A09" />
              </TouchableOpacity>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Captured Photo</Text>
                  {photoUri && (
                    <Image
                      source={{ uri: photoUri }}
                      style={styles.capturedImageModal}
                    />
                  )}
                  <TouchableOpacity
                    onPress={confirmPhoto}
                    style={styles.confirmButton}
                  >
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View style={styles.buttonContainer}>
              <PrimaryBtn type="solid" title="Take Photo" onPress={takePicture} />
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
      { label: "Business Info", index: 1 },
      { label: "Address", index: 2 },
      { label: "Image Capture", index: 3 },
    ];

    return (
      <View style={styles.breadcrumbContainer}>
        {steps.map((item) => (
          <View key={item.index} style={styles.breadcrumbItem}>
            <Text
              style={[styles.breadcrumbText, step === item.index ? styles.activeText : {}]}
            >
              {item.label}
            </Text>
            {step === item.index ? (
              <MaterialIcons name="check-circle" size={24} color="#DB3A09" />
            ) : (
              <MaterialIcons name="circle" size={24} color="#DB3A09" />
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
        {step < 3 && (
          <PrimaryBtn
            type="solid"
            title="Continue"
            onPress={() => handleNextStep(formValues)}
          />
        )}
      </View>
    </View>
  );
};

// Business KYC Form Component
const BusinessKycForm: React.FC<{
  initialValues: BusinessKycValues;
  onNext: (values: BusinessKycValues) => void;
}> = ({ initialValues, onNext }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BusinessKycSchema}
      onSubmit={onNext}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          {(["businessName", "businessNumber", "cacNumber", "businessClass"] as Array<keyof BusinessKycValues>).map((field) => (
            <View key={field}>
              <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
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
        </View>
      )}
    </Formik>
  );
};

// Address Form Component
const AddressForm: React.FC<{
  initialValues: BusinessKycValues;
  onNext: (values: BusinessKycValues) => void;
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddressSchema}
      onSubmit={onNext}
    >
      {({
        handleChange,
        handleBlur,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <View>
          <Text style={styles.addressTitle}>Business Address</Text>
          <Text style={styles.addressDesc}>
            Please provide the business address for KYC verification.
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
                setFieldValue("state", "");
                setFieldValue("city", "");
                setFieldValue("localGovt", "");
              }}
              labelField="label"
              valueField="value"
              value={values.country}
              placeholder="Select country"
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
              data={states[values.country]?.map((state) => ({
                label: state,
                value: state,
              })) || []}
              onChange={(item) => {
                setFieldValue("state", item.value);
                setFieldValue("city", "");
                setFieldValue("localGovt", "");
              }}
              labelField="label"
              valueField="value"
              value={values.state}
              placeholder="Select state"
            />
            {touched.state && errors.state && (
              <Text style={styles.errorText}>{errors.state}</Text>
            )}
          </View>

          {/* Address Fields */}
          {(["addressLine", "postalCode"] as AddressFieldKeys[]).map((field) => (
            <View key={field}>
              <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
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
        </View>
      )}
    </Formik>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#DB3A09",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#DB3A09",
  },
  capturedImageModal: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 25,
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
  camera: {
    height: 400,
    marginBottom: 10,
  },
});

export default BusinessKyc;
