import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AuthLayout from './AuthLayout'
import LoginForm from '../../components/forms/LoginForm'

const LogIn = () => {
  return (
    <View>
        <View style={styles.header}>
            <Text style={styles.headerText}>Đăng nhập</Text>
        </View>
        <AuthLayout/>
        <LoginForm/>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:20
    },
    headerText:{
        fontSize:25,
        color:'black',
        fontWeight:'500'
    }
})
export default LogIn