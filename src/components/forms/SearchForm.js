import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';

const initialize = {
  keyword: '',
};

const SearchForm = () => {
  const schema = yup.object().shape({
    keyword: yup.string(),
  });

  return (
    <View>
      <Formik
        initialValues={initialize}
        onSubmit={val => console.log(val.keyword)}
        validationSchema={schema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.container}>
            <TextInput
              placeholder="Tìm Kiếm"
              autoCapitalize="none"
              onChangeText={handleChange('keyword')}
              onBlur={handleBlur('keyword')}
              value={values.keyword}
              style={styles.input}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/32/null/search--v1.png',
                }}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
  input: {
    position: 'relative',
    width: '85%',
    paddingLeft: 10,
  },
  btn: {
    position: 'absolute',
    right: 15,
    top: '25%',
  },
  container: {
    borderWidth: 1,
    borderRadius: 50,
  },
});
export default SearchForm;
