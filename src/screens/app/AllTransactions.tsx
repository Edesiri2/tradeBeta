import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Screen } from "../Screen";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { colors } from "@src/resources/colors";
import { BoldText, LightText } from "@src/components/shared/text";
import { recentTransaction } from "@src/contants/home";

export default function AllTransactions({
  navigation,
}: RootStackScreenProps<appScreenNames.ALL_TRANSACTIONS>) {
  return (
    <Screen>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcons
            name='arrow-back-ios'
            size={moderateScale(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <BoldText sizeBody black>
          Transaction Details
        </BoldText>
      </View>
      {/* <ScrollView style={styles.otherSettings}> */}
      <View style={styles.container1}>
        <FlatList
          data={recentTransaction}
          keyExtractor={(items) => items.id.toString()}
          contentContainerStyle={{
            flexGrow: 1,
            marginBottom: DVH(10),
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate(appScreenNames.TRANSACTION_DETAILS)
              }
              style={styles.btn}>
              <View style={styles.detailContainer}>
                <View style={styles.transactionIcon}>
                  <MaterialCommunityIcons
                    name='finance'
                    size={moderateScale(20)}
                    color={colors.white}
                  />
                </View>
                <View>
                  <BoldText textStyle={styles.textColor}>
                    {item.detail}
                  </BoldText>
                  <View style={styles.dateTimeContainer}>
                    <LightText>{item.time} •</LightText>
                    <LightText>{item.date}</LightText>
                  </View>
                </View>
              </View>
              <BoldText
                textStyle={{
                  color:
                    item.transType === "send"
                      ? colors.dark_green
                      : colors.main_color,
                }}>
                {item.transType === "send" ? "-" : "+"}
                {item.amount}
              </BoldText>
            </TouchableOpacity>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          windowSize={2}
          updateCellsBatchingPeriod={100}
        />
        <View
          style={{
            paddingVertical: moderateScale(18),
          }}
        />
      </View>
      {/* </ScrollView> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingVertical: moderateScale(21),
    // paddingHorizontal: 21,
  },
  container2: {
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(21),
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  otherSettings: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  textColor: {
    color: "#252525",
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(10),
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  transactionIcon: {
    width: DVW(10),
    height: DVH(9) / 2,
    borderRadius: DVW(15) / 2,
    backgroundColor: colors.main_color,
    justifyContent: "center",
    alignItems: "center",
  },
});
