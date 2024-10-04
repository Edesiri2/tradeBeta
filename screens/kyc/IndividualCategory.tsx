import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PrimaryBtn from '../../components/utils/PrimaryBtn';

// Define form values interface
interface PersonalInfoFormValues {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  nin: string;
}

// Validation schema
const PersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  mobileNumber: Yup.string().required('Mobile Number is required'),
  nin: Yup.string().required('National Identification Number is required'),
});

// Main component
const IndividualCategories: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const renderProgressBar = () => {
    const progress = (step / 3) * 100;
    return (
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    );
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1: return <PersonalInfoForm />;
      case 2: return <AddressForm />;
      case 3: return <IDVerificationForm />;
      default: return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Step {step} of 3</Text>
      {renderProgressBar()}
      {renderStepContent()}
      <View style={styles.buttonContainer}>
        <PrimaryBtn type="solid" title="Continue" onPress={handleNextStep} />
      </View>
    </View>
  );
};

// Personal Info Form Component
const PersonalInfoForm: React.FC = () => {
  const initialValues: PersonalInfoFormValues = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    nin: '',
  };

  const handleSubmit = (values: PersonalInfoFormValues) => {
    console.log('Form Values:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PersonalInfoSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          {(['firstName', 'lastName', 'mobileNumber', 'nin'] as Array<keyof PersonalInfoFormValues>).map((field) => (
            <View key={field}>
                <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()}</Text>
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

// Address Form Component (Placeholder)
const AddressForm: React.FC = () => {
  return (
    <View style={styles.formContainer}>
      <Text>Address Form Coming Soon...</Text>
    </View>
  );
};

// ID Verification Form Component (Placeholder)
const IDVerificationForm: React.FC = () => {
  return (
    <View style={styles.formContainer}>
      <Text>ID Verification Form Coming Soon...</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label:{
    color:"grey"
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  progressContainer: {
    height: 8,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems:"center"
    
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IndividualCategories;
