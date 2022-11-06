import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/layouts/Header';
import LoadingScreen from '../../components/LoadingScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import CheckboxItem from './CheckboxItem';

const AuthLayout = ({
  title,
  loading,
  isRole,
  handleChangeRole,
  isShowRole = true,
  headerProps,
  children,
  footer,
}) => {
  const role = [
    {id: 0, role: 'Luật sư'},
    {id: 1, role: 'Người dùng'},
  ];
  return (
    <View style={styles.container}>
      <Header title={title} {...headerProps} titleStyle={{color: '#0071bc'}} />
      {isShowRole ? (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.userRole}>
            <Text style={styles.text}>Bạn là:</Text>
            <View style={styles.checkbox}>
              {role.map(isRole => (
                <View key={isRole.id}>
                  <CheckboxItem id={isRole.id} title={isRole.role} />
                </View>
              ))}
            </View>
          </View>
        </KeyboardAwareScrollView>
      ) : (
        children
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 32,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  userRole:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginHorizontal:20
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: 'darkblue',
  },
  checkbox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width:'80%'
  },
});
export default AuthLayout;
