import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { authScreenNames } from "@src/navigation/naviagtion-names";
import { AuthScreenProps } from "@src/router/types";
import { userCategoriesOptions } from "@src/contants/user-categories-options";
import { Screen } from "../Screen";

export const UserCategories =
  ({}: AuthScreenProps<authScreenNames.USER_CATEGORIES>) => {
    const navigation = useNavigation();
    const renderItem = ({ item }: any) => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.NavigateTo);
        }}
        style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );

    return (
      <Screen>
        <View style={{ gap: 4 }}>
          <Text style={styles.textHeader}>Choose an option</Text>
          <Text>Kindly select an option from below</Text>
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
    width: 352,
    height: 146,
    backgroundColor: "#e5e4e2",
    marginVertical: 14,
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    // marginBottom: 16,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#DB3A09",
  },
});
