import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from './AuthLayout';
import SignUpForm from '../../components/forms/SignUpForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useAuth } from '~/hooks';

const iconURL =
  'https://img.icons8.com/external-others-inmotus-design/32/null/external-X-alphabet-others-inmotus-design-26.png';

const SignUp = ({navigation}) => {
  const {isLoading} = useAuth();
  return (
    <View>
      <KeyboardAwareScrollView>
        <AuthLayout
          loading={isLoading}
          title="Đăng Ký"
          isShowRole
          headerProps={{
            leftComponent: (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: '#0071BC'}}>Trở lại</Text>
              </TouchableOpacity>
            ),
            rightComponent: (
              <View>
                <Text style={{color: 'white'}}>abcd</Text>
              </View>
            ),
          }}>
          <SignUpForm />
        </AuthLayout>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'cover',
  },
  body: {},
});
export default SignUp;
