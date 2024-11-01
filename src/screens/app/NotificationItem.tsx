import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface NotificationItemProps {
  icon: string;
  title: string;
  description: string;
  timeAgo: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon, title, description, timeAgo }) => (
  <View style={styles.notificationItem}>
    <Icon name={icon} size={24} color="#FF6F00" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.timeAgo}>{timeAgo}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: '#666',
    marginVertical: 4,
  },
  timeAgo: {
    color: '#999',
    fontSize: 12,
  },
});

export default NotificationItem;
