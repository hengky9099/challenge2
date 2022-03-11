import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'


const Banner = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.name}>Hi, Hengky</Text>
        <Text style={styles.location}>Batam City</Text>
        <Image style={styles.picture} source={require('../assets/images/orang.png')} />
      </View>
      <Image style={styles.image} source={require('../assets/images/Banner.png')}></Image>
    </View>
  )
}

export default Banner

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        width: windowWidth,
        height: windowHeight * 0.25,
        backgroundColor: '#D3D9FD',
    },
    name: {
        marginHorizontal: windowWidth * 0.08,
        marginTop: windowHeight * 0.06
    },
    location: {
        marginHorizontal: windowWidth * 0.08,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    image: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.20,
        marginLeft: windowWidth * 0.05,
        marginTop: windowHeight * -0.10,
        borderRadius: 5,
        resizeMode: 'contain'
    },
    picture: {
        width: 40,
        height:40,
        borderRadius: 50,
        marginLeft: 300,
        marginTop: -45
        // flexDirection: 'row',
        // justifyContent: 'flex-end'
    }
})