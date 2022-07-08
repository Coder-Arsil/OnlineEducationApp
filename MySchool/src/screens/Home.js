import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Menu from '../components/Menu';

const SlidePack = ({ bgcolor }) => {
    return (
        <>
            <View style={[styles.boxDesign, { backgroundColor: bgcolor }]}>
                <View>
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>Back End</Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>Tell me your dream</Text>
                        <Text style={{ fontSize: 15, color: 'white' }}>Invite your friends</Text>
                        <View style={{ backgroundColor: 'orange', position: 'absolute', bottom: -35, padding: 5, borderRadius: 5 }}><Text style={{ fontWeight: 'bold' }}>Details</Text></View>
                    </View>
                </View>
                <View style={{ height: "100%", width: "100%", justifyContent: 'center' }}>
                    <Image source={{ uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-javascript-computer-programming-flaticons-lineal-color-flat-icons.png" }} style={{ width: 100, height: 100, marginLeft: 25 }} />
                </View>
            </View>
        </>
    )
}
const Home = () => {
    return (
        <View style={styles.mainComponent}>
            <View style={styles.headPart}>
                <Image source={{ uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-school-literature-flaticons-lineal-color-flat-icons-2.png" }} style={{ height: 35, width: 35 }} />
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }}>My School Online Education</Text>
                <Image source={require('../../images/menu.png')} style={{ height: 18, width: 18 }} />
            </View>

            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Hello Mr. Arsil</Text>
                    <Text style={{ color: 'navy', fontSize: 17, fontWeight: 'bold' }}>You've Got</Text>
                </View>
                <View>
                    <Image source={require("../../images/ArsilMalek.png")} style={{ height: 50, width: 50 }} />
                </View>
            </View>
            <View style={{
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 10, elevation: 10,
                backgroundColor: 'white'

            }}>
                <View>
                    <Image source={require('../../images/teacher.jpg')} style={styles.teacher} />
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{ fontSize: 15, padding: 10, color: 'white', backgroundColor: '#7EC344' }}>Congretulations..! Now you are premium member </Text>
                    <View style={{backgroundColor:'#7EC344',width:"100%",paddingVertical:7.8}}>
                    <Image source={require("../../images/check.png")} style={{ height: 25, width: 25 }} />
                    </View>
                </View>
            </View>
            <View style={styles.courses}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'navy' }}>Courses</Text>
                <Text style={{ color: 'gray', fontSize: 12 }}>Your running subject</Text>

            </View>
            <View style={styles.slider}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <SlidePack bgcolor="#7EC344" />
                    <SlidePack bgcolor="#7EC344" />
                    <SlidePack bgcolor="#7EC344" />
                    <SlidePack bgcolor="#7EC344" />
                </ScrollView>
            </View>
            <View>
                <Menu />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    slider: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingStart: 5,
        paddingVertical: 15
    },
    boxDesign: {
        // backgroundColor: '#5345E7',
        borderRadius: 10,
        paddingVertical: 35,
        paddingHorizontal: 15,
        flexDirection: 'row',
        width: 320,
        marginHorizontal: 5
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    courses: {
        paddingHorizontal: 10,
        marginTop: 25
    },
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
