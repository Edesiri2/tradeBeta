import React from "react";
import { Screen } from "../../Screen";
import {
  BoldText,
  LightText,
  RegularText,
  SemiBoldText,
} from "@src/components/shared/text";
import { BottomTabBarScreenProps } from "@src/router/types";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { colors } from "@src/resources/colors";
import {
  FontAwesome as Icon,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { DVH, DVW, font, moderateScale } from "@src/resources/scaling";
import { recentTransaction } from "@src/contants/home";
import { fontFamily } from "@src/resources/fonts";
import { transactionStatus } from "@src/contants/transaction-status";

export const Transaction = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.TRANSACTION>) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <Text style={styles.h3}>Transactions</Text> */}
          <BoldText sizeBody black>
            Transactions
          </BoldText>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: moderateScale(4),
              justifyContent: "center",
              borderWidth: DVW(0.3),
              borderColor: "#383838",
              padding: moderateScale(10),
              borderRadius: moderateScale(10),
            }}>
            <Icon name='clock-o' size={moderateScale(16)} color='#252525' />
            <Text style={{ fontSize: moderateScale(10) }}>Last 30 days</Text>
            <Icon
              name='chevron-down'
              size={moderateScale(16)}
              color='#252525'
            />
          </TouchableOpacity>
        </View>
        {/* Chart */}
        <View style={styles.userDetails}>
          {/* <Text style={styles.h4}>No Transactions yet</Text> */}
          <BoldText
            sizeBody
            textStyle={{
              color: "gray",
            }}>
            No Transactions yet
          </BoldText>
        </View>
      </View>
      <View style={styles.container2}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          {/* <Text style={styles.h3}>Transaction History</Text> */}
          <BoldText sizeBody black>
            Transaction History
          </BoldText>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(appScreenNames.ALL_TRANSACTIONS)
            }>
            {/* <Text style={styles.p}>View all</Text> */}
            <BoldText
              black
              textStyle={{
                fontSize: font.size14,
              }}>
              View all
            </BoldText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: moderateScale(12),
            marginTop: moderateScale(10),
          }}>
          {transactionStatus &&
            transactionStatus.map((items, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  borderWidth: DVW(0.3),
                  borderColor: "#252525",
                  paddingVertical: moderateScale(8),
                  paddingHorizontal: moderateScale(12),
                  borderRadius: moderateScale(16),
                }}>
                <LightText
                  textStyle={{
                    fontSize: font.size12,
                    color: "#252525",
                  }}>
                  {items}
                </LightText>
              </TouchableOpacity>
            ))}
        </View>
      </View>
      <View style={styles.otherSettings}>
        <FlatList
          data={recentTransaction}
          keyExtractor={(items) => items.id.toString()}
          contentContainerStyle={{
            // flexGrow: 1,
            paddingBottom: DVH(10),
            backgroundColor: colors.white,
            paddingHorizontal: moderateScale(15),
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("TransactionDetails")}
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
            paddingVertical: DVH(15),
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main_light_color,
    paddingTop: 58,
    paddingHorizontal: 21,
    paddingBottom: 54,
  },
  container1: {
    paddingVertical: 5,
    paddingHorizontal: 21,
  },
  container2: {
    paddingVertical: 15,
    paddingHorizontal: 21,
    backgroundColor: "#FFFFFF",
  },
  h3: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "bold",
    color: "#252525",
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontFamily.bold,
    color: "gray",
  },
  p: {
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: "700",
    color: "#252525",
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    color: "#252525",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  userDetails: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 35,
  },
  img: {
    width: 64,
    height: 68.73,
    borderRadius: 64 / 2,
    backgroundColor: "#252525",
    marginBottom: 5,
  },
  otherSettings: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  otherSettingsOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 20,
  },
  otherSettingsOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    padding: 8,
    backgroundColor: "#DB3A09",
    borderRadius: 40 / 2,
    color: "#FFFFFF",
    width: 40,
    height: 40,
    justifyContent: "center",
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
  textColor: {
    color: "#252525",
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
