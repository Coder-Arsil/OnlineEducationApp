import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Menu from '../components/Menu';
const Home = () => {
    return (
        <View style={styles.mainComponent}>
            <View style={styles.headPart}>
                <Image source={require('../../images/logo.png')} style={{ height: 35, width: 35 }} />
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }}>My School Online Education</Text>
                <Image source={require('../../images/menu.png')} style={{ height: 18, width: 18 }} />
            </View>
            <View>
                <Image source={require('../../images/teacher.jpg')} style={styles.teacher} />
            </View>
            <View style={{ width: "100%", backgroundColor: '#7EC344', justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, letterSpacing: 1.5 }}>Welcome to our school</Text>
            </View>
            <View style={{ alignItems: 'center', paddingVertical: 80 }}>
                <Image source={require('../../images/edu.png')} style={{ height: 150, width: 150, marginBottom: 15 }} />
                <Text style={{ fontSize: 15 }}>Your success is our goal !</Text>
            </View>

            {/* <View style={{ alignItems: 'center', paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-around' }} >
                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 50 }}>
                    <Image source={require('../../images/screen.png')} style={{ height: 30, width: 30 }} />
                </View>

                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 50 }}>
                    <Image source={require('../../images/people.png')} style={{ height: 30, width: 30 }} />
                </View>

                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 50 }}>
                    <Image source={require('../../images/comment.png')} style={{ height: 30, width: 30 }} />
                </View>

                <View style={{ padding: 10, backgroundColor: '#7EC344', borderRadius: 50 }}>
                    <Image source={require('../../images/cont.png')} style={{ height: 30, width: 30 }} />
                </View>
            </View>  */}
            <View>
                <Menu />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    teacher: {
        height: 190,
        width: "100%",
    },
    headPart: {
        width: "100%",
        paddingVertical: 10,
        backgroundColor: "#7EC344",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },

})
export default Home
