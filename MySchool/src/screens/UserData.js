import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
    const [Mydata, setData] = useState([])
    const getUserData = async () => {
        try {
            const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
            const realData = response.json()
            setData(realData)
            console.log(Mydata)
        }
        catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        return (
            getUserData()
        )
    }, [])
    return (
        <View>
            <Text>List of Students</Text>
            <FlatList
                keyExtractor={(item)=>item}
                data={Mydata}
                renderItem={ ()=>{}}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default UserData
