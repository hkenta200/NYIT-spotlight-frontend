import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Need nativestack, not just stack
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view and //npm install @react-navigation/bottom-tabs 

import { Image, Text, View, StyleSheet } from 'react-native';

//import icons from icons.expo.fyi
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Avatar, Drawer, Title, } from 'react-native-paper';

//Import screens
import Home from './Home';
import Post from './Post';
import Chats from './Chats';
import Events from './Events';

function DrawerContents({props, navigation}) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{alignContent:'center', justifyContent:'center'}} >
            <Drawer.Section>
                <Drawer.Item 
                    icon={({ color, size }) => (
                        <FontAwesome5 name="home" size={size} color={color} />
                    )}
                    label="Home"
                    onPress={() => {}}
                />
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item
                    icon={({ color, size }) => (
                        <Ionicons name="add-circle" size={size} color={color} />
                    )}
                    label="Post"
                    onPress={() => { }}
                />
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item
                    icon={({ color, size }) => (
                        <AntDesign name="calendar" size={size} color={color} />
                    )}
                    label="Events"
                    onPress={() => { }}
                />
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="thought-bubble" size={size} color={color} />
                    )}
                    label="Chats"
                    onPress={() => { }}
                />
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item
                    icon={({ color, size }) => (
                        <Feather name="settings" size={size} color={color} />
                    )}
                    label="Settings"
                    onPress={() => { }}
                />
            </Drawer.Section>
            <Drawer.Section>
                <Drawer.Item
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="exit-to-app" size={size} color={color} />
                    )}
                    label="Sign Out"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

export default DrawerContents;

const styles = StyleSheet.create({
    topBorder:{
        marginTop:50
    }
})