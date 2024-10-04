import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

interface Option {
  id: string;
  title: string;
  description: string;
  NavigateTo:string;
}

const options: Option[] = [
  {
    id: '1',
    title: 'Individual',
    NavigateTo:'individual-categories',
    description: 'Register as an individual and supply your personal details inclusive of your NIN and image capture.',
  },
  {
    id: '2',
    title: 'Corporate',
    NavigateTo:'corporate-categories',
    description: 'Register as a corporate entity and provide business information including your registration details.',
  },
];

const UserCategory: React.FC = () => {
    const navigation = useNavigation()
  const renderItem = ({ item }: { item: Option }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate(item.NavigateTo)}} style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{gap:4}}>
        <Text style={styles.textHeader}>Choose an option</Text>
        <Text >Kindly select an option from below</Text>
      </View>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        style={{gap:10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"white"
  },
  textHeader: {
    color: "#DB3A09",
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
  },
  card: {
    width: 352,
    height: 146,
    backgroundColor: '#e5e4e2',
    marginVertical:14,
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
    fontWeight: 'bold',
    fontSize: 18,
    color:"#DB3A09"
  },
});

export default UserCategory;
