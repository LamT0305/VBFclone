import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useAuth} from '~/hooks';

const LoginForm = ({navigation}) => {
  const {handleLogin} = useAuth();
  const [viewPW, setViewPW] = useState(true);

  const schema = yup.object().shape({
    email: yup.string().required('Yêu cầu nhập email').email(),
    password: yup.string().required('Yêu cầu nhập mật khẩu'),
  });
  const initialize = {
    email: '',
    password: '',
  };
  return (
    <View>
      <Formik
        initialValues={initialize}
        onSubmit={value => handleLogin(value)}
        validationSchema={schema}
        validateOnMount={true}>
        {({handleChange, handleSubmit, handleBlur, errors, values}) => (
          <View style={styles.containerInput}>
            <View style={styles.body}>
              <View style={styles.inputFields}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={'#bdbdbd'}
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.textInput}
                />
                <Text style={styles.textErrors}>{errors.email}</Text>
              </View>
              <View style={styles.inputFields}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={'#bdbdbd'}
                  autoCapitalize="none"
                  secureTextEntry={viewPW}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={[styles.textInput, styles.PW]}
                />
                <TouchableOpacity
                  style={styles.btnShowPW}
                  onPress={() => setViewPW(!viewPW)}>
                  <Text style={styles.showPass}>Xem</Text>
                </TouchableOpacity>
                <Text style={styles.textErrors}>{errors.password}</Text>
              </View>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
                <Text style={styles.text}>Đăng nhập</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnForgotPW}>
                <Text
                  style={{color: '#0071bc', fontWeight: '600', fontSize: 16}}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnForgotPW}
                onPress={() => navigation.push('SignUp')}>
                <Text
                  style={{color: '#0071bc', fontWeight: '600', fontSize: 16}}>
                  Đăng Ký
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  inputFields: {
    width: '100%',
    marginVertical: 5,
  },
  containerInput: {
    alignItems: 'center',
    height: '85%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#bdbdbd',
    backgroundColor: '#f6f6f6',
    fontSize: 16,
    fontWeight: '600',
  },
  btnLogin: {
    backgroundColor: '#0071bc',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  footer: {
    width: '90%',
  },
  btnForgotPW: {
    padding: 10,
    alignItems: 'center',
  },
  body: {
    width: '95%',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Inter-Medium',
  },
  showPass: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0071bc',
  },
  btnShowPW: {
    position: 'absolute',
    right: 15,
    top: '20%',
  },
  PW: {
    position: 'relative',
  },
});
export default LoginForm;
