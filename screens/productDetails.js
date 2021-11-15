import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const productDetails = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="chevron-back-outline" size={32} color="#40916c" onPress={()=> {navigation.navigate("Home")}} />
                <Ionicons name="menu-outline" size={32} color="#40916c" onPress={()=> {navigation.navigate("")}}/>
            </View>

            <View style={styles.cartHeader}>
                <Text style={styles.cartText}>Product Details</Text>
            </View>

            <ScrollView style={styles.itemsCOntainer} >
                <View style={styles.product}>
                    <View style={styles.productImg}>
                     <Image source={require('../img/sofa-head.png')} style={styles.pimg} />
                    </View>
                </View>
                <View style={styles.productInfo}>
                    <View style={styles.productName}>
                        <Text style={styles.nameText}>Ektorp sofa</Text>
                    </View>
                    <View style={styles.productDetails}>
                        <Text style={styles.pdText}>Modern furniture design features sleek, straight lines with smooth and shiny surfaces. The focus is on simple geometric shapes rather than heavy ornamentation. The objective is to create an uncluttered look, free from chaotic lines and color schemes.</Text>
                    </View>
                    <View style={styles.location} >
                        <View style={styles.left} >
                            <Text>Palm Street ave</Text>
                            <Text>17-001, Accra</Text>
                        </View>
                        <View style={styles.right} >
                        <Ionicons name="chevron-forward-outline" size={32} color="#40916c" onPress={()=> {navigation.navigate("Home")}} />
                        </View>
                    </View>
                    <View style={styles.price} >
                        <Text style={styles.pinfo}>GHC 298.99</Text>
                    </View>
                    <TouchableOpacity style={styles.addToCart}  onPress={()=> {navigation.navigate("cart")}}>
                        <Text style={styles.addText}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default productDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#F4F8FE",
        justifyContent: "center",
        alignItems: 'center',
    },
    pimg:{
        width: "108%",
        height: 260,
        marginTop: -60,
        
    },
    iconContainer:{
        width: "90%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 50,
    },

    cartHeader:{},
    cartText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#588b8b',
    },

    
    itemsCOntainer: {
        width: '100%',
        paddingVertical:10,
        marginTop: 10,
        
    },

    product:{
        width: "100%",
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'teal',
        
    },
    productImg:{
        width: "90%",
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E9F3',
    },
    productInfo:{
        padding: 20,
    },
    nameText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#588b8b',
    },
    productName:{
        marginBottom: 10,
    },
    pdText:{
        lineHeight: 23,
    },
    productDetails:{},
    location:{
        width: '100%',
        height: 70,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor:  '#40916c',
        borderBottomWidth: 2,
        // backgroundColor: "#f2f2f2",
    },
    price:{
        paddingVertical: 10,
    },
    pinfo:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6c757d',
    },
    addToCart:{
        width: '100%',
        backgroundColor: "#588b8b",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10,
        borderRadius: 50,
    },
    addText:{
        color: "#fff",
        padding: 20,
    },
})
