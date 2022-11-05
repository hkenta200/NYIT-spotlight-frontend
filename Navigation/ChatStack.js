import React, { StyleSheet, Text, View } from 'react'

import Chats from '../Screens/Chats';
import ChatTemplate from '../Screens/ChatTemplate';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const cs = createNativeStackNavigator();
const ChatStack = () => { //This page is used when there is no user currently logged in.
    return (
        <NavigationContainer>
            <cs.Navigator>
                <cs.Screen name="ChatMain" component={Chats} options={{ headerShown: false }} />
                <cs.Screen name="ChatIndividual" component={ChatTemplate} options={{headerShown:false}}/>
            </cs.Navigator>
        </NavigationContainer>
    )
}

export default ChatStack;