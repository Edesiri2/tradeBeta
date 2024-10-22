import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { authScreenNames } from "@src/navigation/naviagtion-names";
import { AuthScreenProps } from "@src/router/types";
import { userCategoriesOptions } from "@src/contants/user-categories-options";
import { Screen } from "../Screen";
import { DVH, moderateScale } from "@src/resources/scaling";
import { BoldText, LightText } from "@src/components/shared/text";

export const UserCategories =
  ({}: AuthScreenProps<authScreenNames.USER_CATEGORIES>) => {
    const navigation = useNavigation();
    const renderItem = ({ item }: any) => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.NavigateTo);
        }}
        style={styles.card}>
        <BoldText sizeMedium mainColor>
          {item.title}
        </BoldText>
        <LightText
          sizeBody
          black
          textStyle={{
            lineHeight: Platform.OS !== "ios" ? moderateScale(20) : undefined,
          }}>
          {item.description}
        </LightText>
      </TouchableOpacity>
    );

    return (
      <Screen>
        <View style={styles.titleContainer}>
          <BoldText mainColor sizeLarge>
            Choose an Option
          </BoldText>
          <LightText sizeBody black>
            Kindly select an option from below
          </LightText>
        </View>
        <FlatList
          data={userCategoriesOptions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          style={{ gap: 10 }}
        />
      </Screen>
    );
  };

const styles = StyleSheet.create({
  titleContainer: {
    gap: moderateScale(10),
    marginBottom: "10%",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  textHeader: {
    color: "#DB3A09",
    fontSize: 24,
    fontWeight: "bold",
  },
  list: {
    marginTop: 20,
  },
  card: {
    width: "98%",
    backgroundColor: "#F6F6F6",
    paddingVertical: moderateScale(20),
    marginBottom: moderateScale(20),
    borderRadius: moderateScale(10),
    elevation: 5,
    padding: moderateScale(20),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignSelf: "center",
    gap: Platform.OS === "ios" ? moderateScale(7) : undefined,
  },
});
