import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native'

const loginScreen = () => {
    return (
       <KeyboardAvoidingView
       style={styles.container}
       behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput  placeholder='Email'
                // value={email}
                // onChangeText ={text => setEmail(text)}
                style={styles.input}/>

                <TextInput  placeholder='Password'
                // value={password}
                // onChangeText ={text => setPassword(text)}
                style={styles.input}
                secureTextEntry/>
            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=> {}}
                style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                // onPress={console.log("help")}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Sign up</Text>
                </TouchableOpacity>
            </View>
       </KeyboardAvoidingView>
    )
}

export default loginScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#adb5bd"
    },

    inputContainer: {
        width: "80%",
        // height: "10%",
    },

    input: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 13,
        marginBottom: 10,
        borderRadius: 10,
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#3a86ff',
        width: "100%",
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
    },

    buttonText: {
        color: '#fff'
    },
    buttonOutline: {
        backgroundColor: "#fff",
        borderColor: "#3a86ff",
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: "#3a86ff"
    },
})
