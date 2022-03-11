import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ButtonAction = () => {

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.square}>
                <Image style={styles.image} source={require('../assets/images/fi_truck.png')} />
                <Text style={styles.text}>Sewa Mobil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square}>
                <Image style={styles.image} source={require('../assets/images/fi_box.png')} />
                <Text style={styles.text}>Oleh-Oleh</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square}>
                <Image style={styles.image} source={require('../assets/images/fi_key.png')} />
                <Text style={styles.text}>Penginapan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square}>
                <Image style={styles.image} source={require('../assets/images/fi_camera.png')} />
                <Text style={styles.text}>Wisata</Text>
            </TouchableOpacity>
        </View>
    )    
}

export default ButtonAction

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10
    },
    square: {
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
    },
    text: {
        marginTop: 8,
        fontSize: 14
    }
})