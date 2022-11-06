import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const LoginForm = () => {
    const schema = yup.object().shape({
        email: yup.string().required().email("Yêu cầu nhập email"),
        password: yup.string().required("Yêu cầu nhập mật khẩu")
    })
    const initialize = {
        email:'',
        password:''
    }
  return (
    <View>
      <Formik
        initialValues={initialize}
        onSubmit = {val =>console.log(val.email, val.password)}
        validationSchema={schema}
      >
        {({handleChange, handleSubmit, handleBlur, errors, values})=>(
            <>
                <TextInput
                    placeholder='Nhập địa chỉ email'
                    placeholderTextColor={'black'}
                />
            </>
        )}
      </Formik>
    </View>
  )
}

export default LoginForm