import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import NotificationItem from "./NotificationItem";
import { Screen } from "../Screen";

interface Notification {
  id: string;
  icon: string;
  title: string;
  description: string;
  timeAgo: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    icon: "message-circle",
    title: "New message from Consultant",
    description: '"Hey, what\'s up? All set for the transaction."',
    timeAgo: "a few moments ago",
  },
  {
    id: "2",
    icon: "wallet",
    title: "Wallet Top-up",
    description: "Your wallet top-up of 67.88 RMB has been successfully added.",
    timeAgo: "10 minutes ago",
  },
];

const Notification: React.FC = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationItem
              icon={item.icon}
              title={item.title}
              description={item.description}
              timeAgo={item.timeAgo}
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
});

export default Notification;
