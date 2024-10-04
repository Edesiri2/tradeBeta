import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define types for the button props
interface PrimaryBtnProps {
  type: 'solid' | 'outline'; // Button type
  title: string; // Button text
  onPress: () => void;
  disabled?:boolean ;
 
}

// Create the PrimaryBtn component
const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ type, title, onPress, disabled,  }) => {
  return (
    <TouchableOpacity
    disabled={disabled}
      style={[styles.button, type === 'outline' ? styles.outlineButton : styles.solidButton]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, type === 'outline' ? styles.outlineText : styles.solidText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// Define styles
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 48,
    width: 352,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  solidButton: {
    backgroundColor: '#DB3A09', // Solid button background color
  } as ViewStyle,
  outlineButton: {
    borderColor: '#DB3A09',
    borderWidth: 2,
    backgroundColor: 'transparent', // Outline button has a transparent background
  } as ViewStyle,
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  } as TextStyle,
  solidText: {
    color: 'white', // Solid button text color
  } as TextStyle,
  outlineText: {
    color: '#DB3A09', // Outline button text color
  } as TextStyle,
});

export default PrimaryBtn;
