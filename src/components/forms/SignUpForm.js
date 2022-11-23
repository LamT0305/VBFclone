import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Picker} from '@react-native-picker/picker';
import {LawData} from '../../constants/LawData';
import {useAuth} from '~/hooks';

const SignUpForm = () => {
  const {handleRegister} = useAuth();
  const [showPW, setShowPW] = useState(true);
  const schema = yup.object().shape({
    email: yup.string().required('Yêu cầu nhập email').email(),
    password: yup
      .string()
      .required('Yêu cầu nhập mật khẩu')
      .min(8, 'mật khẩu phải chứa ít nhất 8 ký tự')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Mật khẩu phải chứa ít nhất 1 chữ in hoa, 1 chữ thường và 1 ký tự đặc biệt',
      ),
    fullname: yup.string().required('Yêu cầu nhập họ tên'),
    lawyercode: yup.string().required('Số thẻ luật sư'),
    phoneNumber: yup
      .string()
      .required('Yêu cầu nhập số điện thoại')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Số điện thoại không hợp lệ',
      )
      .max(10)
      .min(10),
  });
  const initialize = {
    email: '',
    password: '',
    fullname: '',
    lawyercode: '',
    expertise: '',
    area: '',
    phoneNumber: '',
  };
  return (
    <View>
      <Formik
        initialValues={initialize}
        onSubmit={val => handleRegister(val)}
        validationSchema={schema}
        validateOnMount={true}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          values,
          setFieldValue,
        }) => (
          <View style={styles.containerInput}>
            <View style={styles.body}>
              <View style={styles.inputFields}>
                <TextInput
                  placeholder="Họ tên"
                  placeholderTextColor={'gray'}
                  autoCapitalize="none"
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  value={values.fullname}
                  style={styles.textInput}
                />
                <Text style={styles.textErrors}>{errors.fullname}</Text>
              </View>
              <View style={styles.inputFields}>
                <TextInput
                  placeholder="Số thẻ luật sư"
                  placeholderTextColor={'gray'}
                  autoCapitalize="none"
                  onChangeText={handleChange('lawyercode')}
                  onBlur={handleBlur('lawyercode')}
                  value={values.lawyercode}
                  style={styles.textInput}
                />
                <Text style={styles.textErrors}>{errors.lawyercode}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={styles.pickerItems}>
                  <Picker
                    selectedValue={values.area}
                    onValueChange={val => setFieldValue('area', val)}
                    placeholder="Lĩnh vực"
                    style={styles.picker}>
                    {LawData.advisoryLawyer.map((items, itemIndex) => (
                      <Picker.Item
                        label={items.label}
                        value={items.value}
                        key={itemIndex}
                      />
                    ))}
                  </Picker>
                </View>
                <View style={[styles.pickerItems, styles.pickerExpertise]}>
                  <Picker
                    placeholder="Chuyên ngành"
                    selectedValue={values.expertise}
                    onBlur={handleBlur('expertise')}
                    onValueChange={itemValue => {
                      setFieldValue('expertise', itemValue);
                    }}
                    style={styles.picker}>
                    {LawData.litigationLawyer.map((items, itemIndex) => (
                      <Picker.Item
                        label={items.label}
                        value={items.value}
                        key={itemIndex}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <View style={styles.inputFields}>
                <TextInput
                  placeholder="Nhập địa chỉ email"
                  placeholderTextColor={'gray'}
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
                  placeholder="Nhập mật khẩu"
                  placeholderTextColor={'gray'}
                  autoCapitalize="none"
                  secureTextEntry={showPW}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={[styles.textInput, styles.positionPW]}
                />
                <Text style={styles.textErrors}>{errors.password}</Text>
                <TouchableOpacity
                  style={styles.btnShowPW}
                  onPress={() => setShowPW(!showPW)}>
                  <Text
                    style={{
                      color: '#0071bc',
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    Xem
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputFields}>
                <TextInput
                  placeholder="Số điện thoại"
                  placeholderTextColor={'gray'}
                  keyboardType="numeric"
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  style={styles.textInput}
                />
                <Text style={styles.textErrors}>{errors.phoneNumber}</Text>
              </View>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
                <Text style={{color: 'white'}}>Đăng Ký</Text>
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
    height: '80%',
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
    fontWeight: '500',
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
    marginTop:20
  },
  btnForgotPW: {
    padding: 10,
    alignItems: 'center',
  },
  body: {
    width: '95%',
  },
  picker: {
    width: '100%',
  },
  pickerItems: {
    borderWidth: 1,
    width: '49%',
    borderRadius: 12,
    borderColor: '#0071BC',
    marginVertical: 5,
  },
  pickerExpertise: {
    borderColor: '#bdbdbd',
  },
  positionPW: {
    position: 'relative',
  },
  btnShowPW: {
    position: 'absolute',
    right: 10,
    top: '20%',
  },
});
export default SignUpForm;
