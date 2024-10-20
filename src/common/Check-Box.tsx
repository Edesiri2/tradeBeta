import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

interface CheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
}

export const CheckBox: React.FC<CheckboxProps> = ({ isChecked, onToggle }) => (
  <TouchableOpacity onPress={onToggle} style={styles.container}>
    {isChecked && <View style={styles.checked} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  checked: {
    width: 16,
    height: 16,
    backgroundColor: "#ff4500",
  },
});
