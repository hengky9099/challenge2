import { View } from 'react-native'
import React from 'react'
import List from '../../components/List'
import Poppins from '../../components/Poppins/Poppins'

const DaftarMobil = () => {
  return (
    <View style={{flex: 1}}>
      <Poppins type='Bold' colorText='#000000' size={16} mt={40} mb={20} ml={20}>Daftar Mobil</Poppins>
        <List />
    </View>
  )
}

export default DaftarMobil
