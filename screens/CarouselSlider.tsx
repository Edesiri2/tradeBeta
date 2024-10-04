import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions, ImageSourcePropType } from 'react-native';
import Swiper from 'react-native-swiper';
import {data} from '../screens/index'

// import PrimaryBtn from './utils/PrimaryBtn';
import { useNavigation } from '@react-navigation/native';
import PrimaryBtn from '../components/utils/PrimaryBtn';

const CarouselSlider = () => {
  const navigation = useNavigation()
  const { width } = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      
      <Swiper
        style={styles.swiper}
        showsPagination={true}
        showsButtons={false}
        paginationStyle={styles.pagination}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image
              resizeMode='cover'
              source={item.image}
              style={styles.image}
            />
           <View style={styles.textContainer}>
           <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
           </View>
          
          </View>
        ))}
      </Swiper>
      <View style={styles.buttonContainer }>
              <PrimaryBtn type='solid' title='Register' onPress={()=>{ navigation.navigate('register')}}/>
              <PrimaryBtn type='outline' title='Already have an account?' onPress={()=>{}}/>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
    
  },
  swiper: {
    height: 400, // Adjust height according to your design needs
  },
  itemContainer: {
    // flex: 1,
    alignItems: 'center',
    paddingHorizontal:20
  },
  image: {
    width: 352,
    height: 386,
    borderRadius: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#900000',
    fontWeight: 'bold',
    
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
   
  },
  description: {
    fontSize: 16,
    color: 'grey',
  
  },
  buttonContainer: {

    flexDirection: 'column',
    alignItems: 'center',
    gap:10,
    marginTop:10
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  activeDot: {
    backgroundColor: '#DB3A09',
  },
  textContainer:{
    justifyContent:'space-between',
    gap:5
  },
});

export default CarouselSlider;
