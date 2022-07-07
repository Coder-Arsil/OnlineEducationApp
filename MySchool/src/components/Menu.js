import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={{ alignItems: 'center', paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-around' }} >
            <TouchableOpacity onPress={() => navigation.navigate("Course")}>
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 50 }} >
                    <Image source={require('../../images/screen.png')} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Students")}>
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 50 }}>
                    <Image source={require('../../images/people.png')} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 50 }}>
                    <Image source={require('../../images/comment.png')} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 50 }}>
                    <Image source={require('../../images/cont.png')} style={{ height: 30, width: 30 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({})
export default Menu