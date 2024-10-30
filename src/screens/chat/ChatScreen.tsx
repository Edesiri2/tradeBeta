import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  // Request permission for Camera and Image Picker
  const requestPermissions = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    const imagePickerPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasPermission(cameraPermission.status === "granted" && imagePickerPermission.status === "granted");
  };

  React.useEffect(() => {
    requestPermissions();
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  }, [messages]);

  const handleAttachImage = async () => {
    if (hasPermission) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const newMessage: IMessage = {
          _id: Math.random().toString(),
          text: "",
          createdAt: new Date(),
          user: { _id: 1, name: "You" },
          image: result.assets[0].uri,
        };
        onSend([newMessage]);
      }
    }
  };

  const handleOpenCamera = async () => {
    if (hasPermission) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const newMessage: IMessage = {
          _id: Math.random().toString(),
          text: "",
          createdAt: new Date(),
          user: { _id: 1, name: "You" },
          image: result.assets[0].uri,
        };
        onSend([newMessage]);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: "https://placekitten.com/40/40" }} style={styles.profileImage} />
        <Text style={styles.headerText}>Temi Owoade (Consultant)</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search-outline" size={24} color="black" />
          <Ionicons name="ellipsis-vertical" size={24} color="black" style={{ marginLeft: 10 }} />
        </View>
      </View>

      {/* Chat Messages */}
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1, name: "You" }}
        renderInputToolbar={(props) => (
          <View style={styles.inputToolbar}>
            <TouchableOpacity onPress={handleAttachImage}>
              <Ionicons name="add" size={28} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenCamera}>
              <Ionicons name="camera-outline" size={28} color="grey" style={{ marginHorizontal: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Record Audio")}>
              <MaterialCommunityIcons name="microphone-outline" size={28} color="grey" />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder="Write message"
              value={text}
              onChangeText={setText}
            />
            <TouchableOpacity onPress={() => onSend([{ _id: Math.random().toString(), text, createdAt: new Date(), user: { _id: 1, name: "You" } }])}>
              <FontAwesome name="send" size={24} color="orange" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: "row",
  },
  inputToolbar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  textInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    marginHorizontal: 10,
  },
});

export default ChatScreen;
