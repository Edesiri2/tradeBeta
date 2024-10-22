import { SemiBoldText } from "@src/components/shared/text";
import { alreadyHaveAnAcct } from "@src/contants/already-have-account";
import { authScreenNames } from "@src/navigation/naviagtion-names";
import { AuthScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Screen } from "../Screen";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { Customer } from "./already-have-an-acct";
import { Consultant } from "./already-have-an-acct/Consultant";

export const AlreadyHaveAcct = ({}: AuthScreenProps<authScreenNames>) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <Screen>
      <View style={[styles.btnContainer, {}]}>
        {alreadyHaveAnAcct &&
          alreadyHaveAnAcct.map((item, index) => (
            <View
              key={index}
              style={[
                styles.itemBtnContainer,
                {
                  borderColor:
                    selectedIndex === index
                      ? colors.main_color
                      : colors.lightGray,
                },
              ]}>
              <TouchableOpacity onPress={() => setSelectedIndex(index)}>
                <SemiBoldText
                  sizeMedium
                  textStyle={{
                    color:
                      selectedIndex === index ? colors.black : colors.lightGray,
                  }}>
                  {item}
                </SemiBoldText>
              </TouchableOpacity>
            </View>
          ))}
      </View>
      {selectedIndex === 0 ? <Customer /> : <Consultant />}
    </Screen>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: DVH(5),
  },
  itemBtnContainer: {
    borderBottomWidth: DVW(0.9),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: moderateScale(10),
  },
});
