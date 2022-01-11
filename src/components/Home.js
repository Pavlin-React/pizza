import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLOURS} from '../database/items';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        paddingTop: 50,
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
          }}>
          <StatusBar backgroundColor={COLOURS.white} batStyle="dark-content" />
          <Image
            source={require('../database/images/background.png')}
            style={{position: 'absolute', top: 0, lrft: -100}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity style={{width: 40, height: 40}}>
              <Image
                source={require('../database/images/profile.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="segment" size={30} color={COLOURS.black} />
            </TouchableOpacity>
          </View>
          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.5,
                fontWeight: '400',
              }}>
              Food
            </Text>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '600',
                color: COLOURS.black,
                letterSpacing: 2,
              }}>
              Delivery
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons
              name="search"
              size={20}
              color={COLOURS.black}
              opacity={0.8}
            />
            <TextInput
              placeholder="Search..."
              style={{
                paddingVertical: 5,
                borderBottomWidth: 1,
                color: COLOURS.black,
                fontSize: 16,
                width: '90%',
                borderBottomColor: COLOURS.black + 20,
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <Text
            style={{
              color: COLOURS.black,
              fontSize: 18,
              paddingTop: 20,
              paddingHorizontal: 20,
              fontWeight: '700',
              letterSpacing: 1,
            }}>
            Categories
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
