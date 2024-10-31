import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { BottomTabBarScreenProps } from "@src/router/types";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";

export const Chat = ({
  navigation,
}: BottomTabBarScreenProps<bottomTabScreenNames.CHAT>) => {
  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Chat</Text>
        <View style={styles.iconContainer}>
          <Icon name='search' size={24} color='grey' style={styles.icon} />
          <Icon name='filter' size={24} color='grey' />
        </View>
      </View>

      {/* Centered Content */}
      <View style={styles.centerContent}>
        <Image source={require("@src/assets/Group.png")} style={styles.image} />

        <Text style={styles.noChatText}>No chat found!</Text>
        <Text style={styles.subText}>
          Connect with your consultant by starting a new chat
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate(appScreenNames.CHAT_MESSAGE);
          }}
          style={styles.startChatButton}>
          <Text style={styles.startChatButtonText}>Start chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqButton}>
          <Text style={styles.faqButtonText}>View FAQs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 121,
    height: 108,
    resizeMode: "contain",
    marginBottom: 10,
  },
  noChatText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF3B30", // Red color
    marginTop: 10,
  },
  subText: {
    fontSize: 14,
    color: "#555555",
    textAlign: "center",
    marginVertical: 10,
  },
  startChatButton: {
    backgroundColor: "#FF3B30", // Red color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  startChatButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  faqButton: {
    borderColor: "#FF3B30", // Red color
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  faqButtonText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "bold",
  },
});
