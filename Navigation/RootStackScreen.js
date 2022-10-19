import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Need nativestack, not just stack
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view and //npm install @react-navigation/bottom-tabs 

import { Image, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();


function Hello() {
  return (
    <Text>
      Hello Navigation!
    </Text>
  )
}

function Bye() { //For testing purposes
  return (
    <Text>
      Bye Navigation!
    </Text>
  )
}

function DrawerContents() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Hello" component={Hello} />
      <Drawer.Screen name="Bye" component={Bye} />
    </Drawer.Navigator>
  )
}

function NavigationDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        
        <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

function Home() {
  return (
    <View>
      <Text>
        Home
      </Text>
    </View>
  )
}

function Events() {
  return (
    <View>
      <Text>
        Events
      </Text>
    </View>
  )
}

function Chats() {
  return (
    <View>
      <Text>
        Chats
      </Text>
    </View>
  )
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Events"component={Events} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  )
}


function RootStackScreen() {
  return (
      <NavigationDrawer/>
  )
}

export default RootStackScreen;