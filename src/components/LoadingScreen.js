import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get("window")

const LoadingScreen = () => {
  return (
    <View style={styles.container}> 
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'rgba(0,0,0,0.7)',
        position:'absolute',
        top:0,
        left:0,
        zIndex:1000,
        width:width,
        height:height
    }   
})
export default LoadingScreen