import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

//import icons from icons.expo.fyi
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

function Profile({ props, navigation }) {
  return (
    <ScrollView>
      <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }]}>
        <EvilIcons name="user" size={100} />
      </View>
      <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection:'row', paddingTop:30 }]}>
        <TouchableOpacity>
          <Text>Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{ marginLeft:35 }]}>
        <Text>Message</Text>
        </TouchableOpacity>
      </View>
      <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection:'row', paddingTop:30 }]}>
        <Text>
          Everything below this is the list of post of the respective user
        </Text>
      </View>
    </ScrollView>
  )
}

export default Profile;