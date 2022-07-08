import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {
    
    const [Mydata, setData] = useState([])
    
    const getUserData = async () => {
        try {
            const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
            const realData = await response.json()
            setData(realData)
            // console.log(Mydata)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        return(
            getUserData()
        )
    } ,[])
    const showUserData = ({ item }) => {
        
        return (
            <>
                <View style={styles.mainContainer}>
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
                            <Text style={styles.myName }>
                                Email : {item.email}
                            </Text>
                            <Text style={styles.myName }>
                                Mobile : {item.mobile}
                            </Text>
                        </View>
                    </View>
                </View>
                </View>
            </>
        )
    }
    return (
        <View>
            <Text style={{fontSize:30,color:'navy',fontWeight:'bold',textAlign:'center'}}>List of Students</Text>
            <FlatList
                keyExtractor={(item) => item}
                data={Mydata}
                renderItem={showUserData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width:250,
        height:350,
        backgroundColor:'#fff',
        borderRadius:5,
        margin:20,
    },
    mainContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    bioDataContainer:{
        width:"100%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#353535',
        paddingVertical:10,
        paddingHorizontal:5,

    },
    idNumber:{
        fontSize:20,
        color:"rgba(255,255,255,0.5)"
    },
    bioData:{
        fontSize:30,
        color:"#fff"
    },
    imgContainer:{
        padding:10
    },
    imgStyle:{
        width:"100%",
        height:180,

    },
    mainContent:{
        padding:10,
        backgroundColor:'#353535',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    myName:{
        color:'#fff',
        marginBottom:10,
        fontSize:14
    }
    
})

export default UserData
