import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import DaftarMobil from '../screens/DaftarMobil/DaftarMobil';
import Akun from '../screens/Akun/Akun';



const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
            height: 60,
        },
    }}>
      <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <View style={styles.button}>
                <Image source={require('../assets/images/home.png')}
                style={{tintColor: focused ? '#0D28A6' : '#000000'}}
                 />
                 <Text
                    style={{
                        fontSize: 10,
                        color: focused ? '#0D28A6' : '#000000',
                        fontWeight: focused ? 'bold' : 'normal',
                        fontFamily: 'Helvetica',
                    }}>
                        Home
                 </Text>
              </View>
          )
      }} />
      <Tab.Screen name="DaftarMobil" component={DaftarMobil}  options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <View style={styles.button}>
                <Image source={require('../assets/images/list.png')}
                style={{tintColor: focused ? '#0D28A6' : '#000000'}}
                 />
                 <Text
                    style={{
                        fontSize: 10,
                        color: focused ? '#0D28A6' : '#000000',
                        fontWeight: focused ? 'bold' : 'normal',
                        fontFamily: 'Helvetica',
                    }}>
                        Daftar Mobil
                 </Text>
              </View>
          )
      }} />
      <Tab.Screen name="Akun" component={Akun} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <View style={styles.button}>
                <Image source={require('../assets/images/user.png')}
                style={{tintColor: focused ? '#0D28A6' : '#000000'}}
                 />
                 <Text
                    style={{
                        fontSize: 10,
                        color: focused ? '#0D28A6' : '#000000',
                        fontWeight: focused ? 'bold' : 'normal',
                        fontFamily: 'Helvetica',
                    }}>
                        Akun
                 </Text>
              </View>
          )
      }}/>
    </Tab.Navigator>

  )
}

export default BottomNav

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})