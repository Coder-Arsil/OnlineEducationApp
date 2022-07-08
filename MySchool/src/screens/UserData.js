import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
    const [Mydata, setData] = useState([])
    const getUserData = async () => {
        try {
            const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
            const realData = response.json()
            setData(realData)
            // console.log(Mydata)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>getUserData() ,[])
    const showUserData = ({ item }) => {
        return (
            <>
                <View style={styles.card}>
                    <View style={styles.imgContainer}>
                        <Image style={styles.imgStyle}
                            source={{ uri: item.image }}
                        />
                    </View>
                    <View>
                        <View style={styles.bioDataContainer}>
                            <Text style={styles.bioData}>Bio-Data</Text>
                            <Text style={styles.idNumber}>
                                {item.id < 10 ? `#0${item.id}` : `#0{item.id}`}
                            </Text>
                        </View>
                        <View style={styles.mainContent}>
                            <Text style={styles.myName}>
                                Name : {item.name}
                            </Text>
                            <Text style={styles.email}>
                                Email : {item.name}
                            </Text>
                            <Text style={styles.mobile}>
                                Mobile : {item.name}
                            </Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <View>
            <Text>List of Students</Text>
            <FlatList
                data={Mydata}
                renderItem={showUserData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: "100%",
        paddingVertical: 50,
        backgroundColor: "gray"
    }
})

export default UserData
