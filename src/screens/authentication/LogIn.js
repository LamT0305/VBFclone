import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AuthLayout from './AuthLayout';
import LoginForm from '../../components/forms/LoginForm';
import { useAuth } from '~/hooks';


const LogIn = ({navigation}) => {
  const {isLoading} = useAuth();
  return (
    <View>
      <AuthLayout 
        title="Đăng nhập" 
        isShowRole={true}
        loading={isLoading}
        >
        <LoginForm navigation={navigation} />
      </AuthLayout>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
  },
});
export default LogIn;
