import React from "react";
import { Screen } from "../../Screen";
import { BoldText, LightText, SemiBoldText } from "@src/components/shared/text";
import { BottomTabBarScreenProps } from "@src/router/types";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { Button } from "@src/components/shared/button";
import { homeAmountCard, recentTransaction } from "@src/contants/home";

const arrowSymbol = "\u21E5";

export const Home = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.HOME>) => {
  return (
    <View style={styles.container}>
      <View
        style={{ paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20 }}
      >
        <View style={styles.header}>
          <View style={styles.imgContainer}>
            <Image
              source={require("@src/assets/home-user.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <BoldText sizeBody textStyle={styles.textColor}>
              Hi, Yemi
            </BoldText>
          </View>
          <View style={styles.headerActionBtn}>
            <TouchableOpacity>
              <Ionicons name="eye" color={"#252525"} size={moderateScale(20)} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="notifications"
                color={"#252525"}
                size={moderateScale(20)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.accountInfoContainer}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <BoldText sizeMedium textStyle={styles.textColor}>
              ¥
            </BoldText>
            <BoldText sizeXtraLarge textStyle={styles.textColor}>
              794.00
            </BoldText>
          </View>
          <SemiBoldText sizeSmall>Available Wallet balance</SemiBoldText>
          <View style={styles.btnContainer}>
            <Button
              title="Send"
              textWhite
              sizeBody
              bgMainColor
              style={{
                width: "40%",
              }}
              onPress={() => {
                navigation.navigate(appScreenNames.SEND_MONEY);
              }}
              leftIcon={
                <FontAwesome
                  name="send"
                  color={colors.white}
                  size={moderateScale(15)}
                />
              }
            />
            <Button
              title="Withdraw"
              textWhite
              sizeBody
              style={{
                width: "40%",
                backgroundColor: "#383838",
              }}
              onPress={() => {
                navigation.navigate(appScreenNames.WITH_DRAW);
              }}
              leftIcon={
                <Feather
                  name="download"
                  color={colors.white}
                  size={moderateScale(15)}
                />
              }
            />
          </View>
          {homeAmountCard &&
            homeAmountCard.map((item, index) => (
              <View style={styles.amountCard} key={index}>
                <View>
                  <SemiBoldText sizeSmall textStyle={styles.textColor}>
                    {item.type === "top up" ? "Buy to you" : "Sell from your"}
                  </SemiBoldText>
                  <BoldText sizeBody textStyle={styles.textColor}>
                    RMB Wallet
                  </BoldText>
                </View>
                <View style={styles.amountText}>
                  <BoldText sizeBody textStyle={styles.textColor}>
                    {item.price}
                  </BoldText>
                  <BoldText sizeBody textStyle={styles.textColor}>
                    ⇆
                  </BoldText>
                  <BoldText sizeBody textStyle={styles.textColor}>
                    ¥ {item.at}
                  </BoldText>
                </View>
                <TouchableOpacity>
                  <BoldText sizeBody mainColor>
                    {item.type === "top up"
                      ? "TOP UP +"
                      : `SELL ${arrowSymbol}     `}
                  </BoldText>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, backgroundColor: "#fff" }}>
        <View style={styles.recentTransHeader}>
          <BoldText sizeBody textStyle={styles.textColor}>
            Recent Transaction
          </BoldText>
          <TouchableOpacity
            onPress={() => navigation.navigate(appScreenNames.ALL_TRANSACTIONS)}
          >
            <SemiBoldText sizeSmall textStyle={styles.textColor}>
              View All
            </SemiBoldText>
          </TouchableOpacity>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.main_light_color,
  },
  image: {
    width: DVW(10),
    height: DVH(10) / 2,
    borderRadius: DVW(25) / 2,
  },
  imgContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  headerActionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accountInfoContainer: {
    marginTop: DVH(3),
    flexDirection: "column",
    alignItems: "center",
    gap: moderateScale(10),
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
    marginTop: DVH(3),
  },
  amountCard: {
    width: "100%",
    borderRadius: moderateScale(10),
    backgroundColor: colors.white,
    borderWidth: DVW(0.3),
    borderColor: "#252525",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textColor: {
    color: "#252525",
  },
  amountText: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  recentTransHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  transactionIcon: {
    width: DVW(10),
    height: DVH(9) / 2,
    borderRadius: DVW(15) / 2,
    backgroundColor: colors.main_color,
    justifyContent: "center",
    alignItems: "center",
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(10),
  },
});
