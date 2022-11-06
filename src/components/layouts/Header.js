import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';

const Header = props => {
  const {title, leftComponent, rightComponent, titleStyle, containerStyle} =
    props;
  return (
    <View>
      <View style={{flex: 1, alignItems: 'flex-start'}}>{leftComponent}</View>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            ...titleStyle,
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
        }}>
        {rightComponent}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
});
export default Header;
