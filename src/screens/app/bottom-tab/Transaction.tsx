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
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { recentTransaction } from "@src/contants/home";

export const Transaction = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.TRANSACTION>) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.h3}>Tansactions</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#383838",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Icon name="clock-o" size={16} color="#252525" />
            <Text style={{ fontSize: 10 }}>Last 30 days</Text>
            <Icon name="chevron-down" size={16} color="#252525" />
          </TouchableOpacity>
        </View>
        {/* Chart */}
        <View style={styles.userDetails}>
          <Text style={styles.h4}>No Transactions yet</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.h3}>Transaction History</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(appScreenNames.ALL_TRANSACTIONS)}
          >
            <Text style={styles.p}>View all</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 12,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#252525",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 16,
            }}
          >
            <Text style={styles.text}>Money Sent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#252525",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 16,
            }}
          >
            <Text style={styles.text}>Top Ups</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#252525",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 16,
            }}
          >
            <Text style={styles.text}>Withdrawn</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.otherSettings}>
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
                onPress={() => navigation.navigate("TransactionDetails")}
                style={styles.btn}
              >
                <View style={styles.detailContainer}>
                  <View style={styles.transactionIcon}>
                    <MaterialCommunityIcons
                      name="finance"
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
                  }}
                >
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
      </ScrollView>
    </View>
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
    fontWeight: "bold",
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
