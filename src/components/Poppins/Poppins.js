import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Poppins = ({type = 'Regular', children, colorText = 'black', size = 12, mt, mb, ml, mh, textalign, width, height}) => {
    
    const style = StyleSheet.create({
        text: {
            fontFamily: `Poppins-${type}`,
            color: colorText,
            fontSize: size,
            marginTop: mt,
            marginBottom: mb,
            marginLeft: ml,
            width: width,
            height: height,
            marginHorizontal: mh,
            textAlign: textalign
        },
    })
    
    
    return <Text style={style.text}>{children}</Text>
}


export default Poppins;

