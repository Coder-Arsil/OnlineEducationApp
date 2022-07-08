import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, {useState} from 'react'

const Contact = () => {
    return (
        <View style={styles.mainConteiner}>
            <Text style={styles.mainHeader}>
                Level up your knowledge
            </Text>
            <Text style={styles.description}>
                You reach us anytime via arsil8356@gmail.com
            </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your name</Text>
                <TextInput placeholder='arsil malek' style={styles.inputStyle}
                    // value={""}
                    // onChangeText={""}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your email</Text>
                <TextInput placeholder='yourid@gmail.com' style={styles.inputStyle}
                    // value={""}
                    // onChangeText={""}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your mobile number</Text>
                <TextInput placeholder='+91 123 456 7890' style={styles.inputStyle}
                    // value={""}
                    // onChangeText={""}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>About you</Text>
                <TextInput placeholder='Tell us about your self' style={[styles.inputStyle, styles.multilineStyle]}
                    // value={""}
                    // onChangeText={""}
                />
            </View>

            {/* button coding */}
            <View style={{paddingHorizontal:15,marginTop:25}}>
                <TouchableOpacity>
                    <Text style={styles.submitBtn}> 
                        <Image source={{ uri: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-upload-web-flaticons-flat-flat-icons-4.png" }} style={{ height: 30, width: 30 }} />  Submit Now !
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    submitBtn:{
        backgroundColor:'#7EC344',
        paddingVertical:10,
        paddingBottom:15,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        alignItems:'center',
        justifyContent:'center'
    },
    mainHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5
    },
    description: {
        color: 'gray',
        fontSize: 15,
        textAlign: 'center',
        marginVertical:25
    },
    inputContainer: {
        // marginVertical:0,
        padding: 15
    },
    labels: {
        marginVertical: 5
    },
    inputStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        height: 35
    },
    multilineStyle: {
        height: 100
    }
})

export default Contact
