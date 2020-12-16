/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeScreen,
  MessageScreen,
  ProfileScreen,
  FavouriteScreen
} from './src/screens'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()


const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourite'
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  )
}


// TODO: Need to integrate this drawer menu with bottom navigation.

const DrawerNavigator = () => { 
  return (
    <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: 'red',
            itemStyle: {marginVertical: 5},
      }} >
          <Drawer.Screen
            name="Home"
            options={{drawerLabel: 'Home'}}
            component={HomeScreen}
          />
          <Drawer.Screen
            name="Favourite"
            options={{drawerLabel: 'Favourite'}}
            component={FavouriteScreen}
          />
          <Drawer.Screen
            name="Message"
            options={{drawerLabel: 'Message'}}
            component={MessageScreen}
          />
          <Drawer.Screen
            name="Profile"
            options={{drawerLabel: 'Profile'}}
            component={ProfileScreen}
          />
        </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
        <BottomTabStack />
      </NavigationContainer>
  )
}

export default App