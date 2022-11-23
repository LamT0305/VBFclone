import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/layouts/Header';
import LoadingScreen from '../../components/LoadingScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import SignUpForm from '../../components/forms/SignUpForm';
import {useAuth} from '~/hooks';

const AuthLayout = ({
  title,
  children,
  loading,
  footer,
  isShowRole,
  headerProps,
}) => {
  const {isRole, handleChangeRole} = useAuth();

  return (
    <View style={styles.container}>
      <Header title={title} {...headerProps} titleStyle={{color: 'black'}} />

      {isShowRole ? (
        <View style={styles.userRole}>
          <Text style={styles.text}>Bạn là:</Text>
          <View style={styles.btnRadio}>
            <CheckBox
              disabled={false}
              value={isRole}
              onValueChange={() => handleChangeRole(!isRole)}
              onFillColor="#0071bc"
            />
            <Text style={{color: 'black'}}>Luật sư</Text>
          </View>
          <View style={styles.btnRadio}>
            <CheckBox
              disabled={false}
              value={!isRole}
              onValueChange={() => handleChangeRole(!isRole)}
              onFillColor="#0071bc"
            />
            <Text style={{color: 'black'}}>Người dùng</Text>
          </View>
        </View>
      ) : null}

      {children}

      <View>{footer}</View>

      {loading && <LoadingScreen />}
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
  userRole: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  btnRadio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default AuthLayout;
