import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';

const Header = props => {
  const {title, leftComponent, rightComponent, titleStyle, containerStyle} =
    props;
  return (
    <View style={styles.container}>
      <View style={styles.leftComponent}>{leftComponent}</View>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: 'white',
            fontFamily: 'Inter-Medium',
            ...titleStyle,
          }}>
          {title}
        </Text>
      </View>
      <View style={styles.rightComponent}>{rightComponent}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: Platform.OS === 'android' ? 20 : 0,
    marginBottom:20
  },
});
export default Header;
