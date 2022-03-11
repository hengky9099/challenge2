import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Poppins from '../../components/Poppins/Poppins'

const Akun = () => {

  const buttonClickListener = () => {
    alert('Coming Soon!')
  }

  return (
    <View>
      <Poppins type='Bold' size={18} colorText="#000000" ml={30} mt={40} mb={20}>Akun</Poppins>
      <Image style={styles.image} source={require('../../assets/images/Allura_Park1.png')} />
      <Poppins size={18} width={315} mh={22} mt={-30} textalign='center'>Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah</Poppins>
      <TouchableOpacity style={styles.button} onPress={buttonClickListener}>
        <Poppins size={18} type='Bold' colorText='#ffffff'>Register</Poppins>
      </TouchableOpacity>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 300,
    resizeMode: 'contain',
    marginHorizontal: 20,
    marginTop: 50
  },
  innerView: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#808080',
    marginTop: 200,
    marginBottom: 200,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    width: 315,
    marginHorizontal: 22,
    marginTop: -30,
    textAlign: 'center'
  },
  button: {
    width: 110,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#5CB85F',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 125
  },
})