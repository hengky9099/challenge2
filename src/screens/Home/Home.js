import { ScrollView, StatusBar } from 'react-native'
import React from 'react'
import ButtonAction from '../../components/ButtonAction'
import Banner from '../../components/Banner'
import List from '../../components/List'
import Poppins from '../../components/Poppins/Poppins'

const Home = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar backgroundColor="#D3D9FD" />
      <Banner />
      <ButtonAction />
      <Poppins type='Bold' colorText="#000000" size={16} mt={30} mb={15} ml={22}>Daftar Mobil Pilihan</Poppins>
      <List />
    </ScrollView>
  )
}

export default Home
