import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import SearchForm from '~/components/forms/SearchForm';
import CourseItems from '~/components/courses/CourseItems';

const Home = () => {
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Trở lại</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 24,
            fontWeight: '600',
          }}>
          Khóa học
        </Text>
        <TouchableOpacity>
          <Text style={styles.btnText}>Sắp xếp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <SearchForm />
      </View>
      <CourseItems/>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  wrapper: {
    marginHorizontal: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0071BC',
  },
});
export default Home;
