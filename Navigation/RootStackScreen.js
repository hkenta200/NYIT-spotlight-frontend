import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Need nativestack, not just stack
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view and //npm install @react-navigation/bottom-tabs 

import { Image, Text, View, StyleSheet } from 'react-native';

import { Avatar, Title} from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons'; 

//Import screens
import Home from '../Screens/Home';
import Post from '../Screens/Post';
import Chats from '../Screens/Chats';
import Events from '../Screens/Events';
import DrawerContents from '../Screens/DrawerContents';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function NavigationDrawer() {
  return (
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{ drawerPosition: 'left', drawerType:'slide' }}  drawerContent={(props) => <DrawerContents {...props}/>}>
          <Drawer.Screen name="BottomTabs" component={BottomTabs} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      initialRouteName="Home" //What automatically shows when openning the page that has this navigation
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            <View>
              <FontAwesome5
                name="Home"
                size={20}
                style={{
                  color: focused ? "#f2a900" : "#748c94"
                }}
              />
              <Text>HOME</Text>
            </View>
          }
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({ focused }) => {
            <View>
              <FontAwesome5
                name="home"
                size={20}
                style={{
                  color: focused ? "#f2a900" : "#748c94"
                }}
              />
              <Text>HOME</Text>
            </View>
          }
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => {
            <View>
              <FontAwesome5
                name="home"
                size={20}
                style={{
                  color: focused ? "#f2a900" : "#748c94"
                }}
              />
              <Text>HOME</Text>
            </View>
          }
        }} />
    </Tab.Navigator>
  )
}


function RootStackScreen() {
  return (
    <NavigationDrawer />
  )
}

export default RootStackScreen;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  }
})