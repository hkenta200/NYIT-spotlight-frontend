import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { Container } from '../ScreenStylings/MainStylings';


//import icons from icons.expo.fyi
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import PostComponent from '../DynamicComponents/PostComponent';
import spotlight from '../assets/spotlight.png';

const listOfPosts = [
  {
    id: '1',
    name: 'Harrown',
    userImage: <EvilIcons name="user" size={200} color={"black"} />,
    date: '11/7/2022',
    message: "Registration for the fall semester is tomorrow. I have everything planned out already. Message me for any questions!",
    postImage: spotlight,
    liked: true,
    numberOfLikes: '1',
    numberOfComments: '1'
  },
  {
    id: '2',
    name: 'Kevin',
    //userImage: <EvilIcons name="user" size={15} color="black"/>,
    date: '11/7/2022',
    message: "I saw a professor that I had 2 years ago. We had a nice chat!",
    postImage: null,
    liked: false,
    numberOfLikes: null,
    numberOfComments: '1'
  },
  {
    id: '3',
    name: 'Oscar',
    //userImage: <EvilIcons name="user" size={15} color="black"/>,
    date: '11/7/2022',
    message: "I just took my CSCI 185 exam. Super easy!",
    postImage: null,
    liked: true,
    numberOfLikes: '8',
    numberOfComments: '2'
  },
]

function Profile({ props, navigation }) {
  return (
    <FlatList
      data={listOfPosts}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <PostComponent item={item} />
      )}

      ListHeaderComponent={
        <View>
          <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }]}>
            <EvilIcons name="user" size={100} />
          </View>
          <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: 30 }]}>
            <Text>Name</Text>
          </View>
          <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: 30 }]}>
            <TouchableOpacity>
              <Text>Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{ marginLeft: 35 }]}>
              <Text>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  )
}

export default Profile;