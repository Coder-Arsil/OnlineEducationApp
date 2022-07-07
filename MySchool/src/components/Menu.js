import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={{ alignItems: 'center', paddingVertical: 50, flexDirection: 'row', justifyContent: 'space-around' }} >
            <TouchableOpacity onPress={() => navigation.navigate("Course")}>
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 10 }} >
                    <Image source={{uri:"https://img.icons8.com/color-glass/48/000000/box.png"}} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Students")}>
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 10 }}>
                    <Image source={require('../../images/people.png')} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 10 }}>
                    <Image source={{uri:"https://img.icons8.com/color-glass/48/000000/speech-bubble.png"}} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 10 }}>
                    <Image source={{uri:"https://img.icons8.com/fluency/48/000000/about-us-female.png"}} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({})
export default Menu