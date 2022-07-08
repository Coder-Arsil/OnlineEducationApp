import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MyCourses from "../api/MyCourses"

const Course = ({ navigation }) => {
    const CourseCard = ({ item }) => {
        return <View style={styles.outer}><View style={styles.mainContainer}>
            <View style={styles.courseContainer}>
                <View>
                    <Image style={styles.imgContainer} source={item.image}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.mainHeader}>
                    {item.title}
                </Text>

                <Text style={styles.desctiption}>
                    {item.desctiption}
                </Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.btnStyles}
                        onPress={() => navigation.navigate("Students")}
                    >
                        <Text style={styles.btnText}>
                            Course Details
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
    }
    return (
        <>
            <FlatList
                keyExtractor={(item) => item.id}
                data={MyCourses}
                renderItem={CourseCard}
            />
        </>
    )
}

const styles = StyleSheet.create({
    outer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        borderRadius: 25,
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        width: "85%"
    },
    imgContainer: {
        height: 250,
        borderRadius: 25,
        aspectRatio: 1,
        width: "100%"
    },
    courseContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    mainHeader: {
        fontSize: 25,
        color: 'navy',
        fontWeight: 'bold',
        marginBottom: 15
    },
    btnStyles: {
        backgroundColor: '#7EC344',
        padding: 10,
        borderRadius: 15,
        marginTop: 15,
    },
    btnText: {
        color: 'white'
    }
})

export default Course
