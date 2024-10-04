import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PrimaryBtn from '../components/utils/PrimaryBtn';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const RegistrationIntroScreen = () => {

    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* Back Button */}
    

      {/* Title */}
      <Text style={styles.title}>Register your account</Text>
      <Text style={styles.subtitle}>Start using Tradebeta with a few steps away.</Text>

      {/* Steps Section */}
      <View style={styles.stepsContainer}>
        {/* Step 1 */}
        <View style={styles.step}>
          <View style={styles.stepNumberContainer}>
            <Text style={styles.stepNumber}>1</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Verify your email address</Text>
            <Text style={styles.stepDescription}>We will send a code to your email, copy and verify on the app.</Text>
          </View>
          {/* <Image
            source={require('./assets/email_icon.png')} // Add your email icon here
            style={styles.stepImage}
          /> */}
        </View>

        {/* Step 2 */}
        <View style={styles.step}>
          <View style={styles.stepNumberContainer}>
            <Text style={styles.stepNumber}>2</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Tell us more about you</Text>
            <Text style={styles.stepDescription}>It is CBN standard guidelines to get KYC details of all account holders.</Text>
          </View>
          {/* <Image
            source={require('./assets/user_icon.png')} // Add your user icon here
            style={styles.stepImage}
          /> */}
        </View>

        {/* Step 3 */}
        <View style={styles.step}>
          <View style={styles.stepNumberContainer}>
            <Text style={styles.stepNumber}>3</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Setup a Transaction PIN</Text>
            <Text style={styles.stepDescription}>This is the PIN that secures your account from unauthorised access.</Text>
          </View>
          {/* <Image
            source={require('./assets/pin_icon.png')} // Add your lock icon here
            style={styles.stepImage}
          /> */}
        </View>
      </View>

      {/* Continue Button */}
     <View style={{ alignItems:"center", marginBottom:16 }}>
     <PrimaryBtn title='Continue' onPress={() => {navigation.navigate('register-form') } } type={'solid'} />
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F8E9E9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 20,
    color: '#900000', // dark red color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#900000', // dark red color
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8A8A8A',
    marginBottom: 24,
  },
  stepsContainer: {
    flex: 1,
  },
  step: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  stepNumberContainer: {
    width: 32,
    height: 32,
    backgroundColor: '#FFDFC7',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5A00',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  stepDescription: {
    fontSize: 14,
    color: '#8A8A8A',
    marginTop: 4,
  },
  stepImage: {
    width: 40,
    height: 40,
    marginLeft: 12,
  },
  continueButton: {
    backgroundColor: '#FF5A00',
    paddingVertical: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistrationIntroScreen;