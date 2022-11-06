import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'

const CheckboxItem = ({id, title}) => {
    const [isSelected, setSelected] = useState(false)
    const handleValueChange = () =>{
        setSelected(!isSelected)
    }
  return (
    <View style={styles.container}>
      <CheckBox 
        value = {isSelected}
        onValueChange={handleValueChange}
      />
      <Text>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    }
})
export default CheckboxItem