import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: "Daihatsu Xenia",
        people: "5",
        bag: '3',
        price: 'Rp. 230.000'
    },
    {
        id: 'bd7acb123a-c1b1-46c2-aed5-3ad53abb28ba',
        name: "Toyota Ronia",
        people: "8",
        bag: '4',
        price: 'Rp. 310.000'
    },
    {
        id: 'bdsfdcbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: "Ronaldo Toyota",
        people: "2",
        bag: '1',
        price: 'Rp. 1.230.000'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aedd5-3ad53abb28ba',
        name: "Mitsubitsi elektronik",
        people: "4",
        bag: '3',
        price: 'Rp. 530.000'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-dasdf53abb28ba',
        name: "ODOO",
        people: "3",
        bag: '1',
        price: 'Rp. 110.000'
    },
    {
        id: 'bd7acbea-c1b1-46c2-af5-3ad53abb28ba',
        name: "Python",
        people: "11",
        bag: '6',
        price: 'Rp. 2.530.000'
    },
];

const List = ({name, people, bag, price}) => (
    <SafeAreaView>
        <TouchableOpacity style={styles.container}>
            <Image style={styles.car} source={require('../assets/images/car.png')} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.iconsContainer}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.iconIcon} source={require('../assets/images/user_icon.png')} />
                        <Text style={styles.iconText}>{people}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image style={styles.iconIcon} source={require('../assets/images/bag_icon.png')} />
                        <Text style={styles.iconText}>{bag}</Text>
                    </View>
                </View>
                <Text style={styles.price}>{price}</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
);

const Lists = () => {
    const render = ({ item }) => (
        <List name={item.name} people={item.people} bag={item.bag} price={item.price} />
    )

    return (
          <FlatList
            data={DATA}
            renderItem={render}
            keyExtractor={item => item.id}
          />
      );
}


export default Lists

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: windowWidth * 0.90,
        height: windowHeight * 0.15,
        elevation: 1,
        borderRadius: 1,
        marginHorizontal: 20,
        marginTop: 12,

    },
    car: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginLeft: 16,
        marginTop: 16
    },
    name: {
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 20,
        marginLeft: 10,

    }, 
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    iconText: {
        marginLeft: 4,

    },
    iconIcon: {
        marginLeft: 10,
        marginTop: 3
    },
    price: {
        color: '#5CB85F',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        marginTop: 5
    }

    
})