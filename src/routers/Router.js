import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNav from '../components/BottomNav'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})