import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { DVW, moderateScale } from "@src/resources/scaling";

type authHeaderProps = {
  onPress: () => void;
};

export const AuthHeader: React.FC<authHeaderProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
      <MaterialIcons
        name='keyboard-arrow-left'
        color={colors.black}
        size={moderateScale(30)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.main_light_color,
    width: DVW(10),
    height: DVW(10),
    borderRadius: DVW(10) / 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: moderateScale(30),
  },
});
