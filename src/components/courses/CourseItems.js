import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useCourse, useAuth} from '~/hooks';
import {useToast} from '~/hooks';
import {fDateOriginal} from '../utils/formatTime';

const CourseItems = () => {
  const {toast} = useToast();
  const {courses, handleGetCourse} = useCourse();
  const {user} = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    handleGetCourse(currentPage);
  }, [currentPage]);

  return (
    <View>
      <FlatList
        style={styles.container}
        data={courses}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setCurrentPage(currentPage + 1);
          console.log('a');
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.course}>
              <View style={styles.img}>
                <Image
                  source={require('../../assets/images/img-course.png')}
                  style={styles.img_course}
                />
              </View>

              <View style={styles.detailCourse}>
                <Text style={styles.title} numberOfLines={2}>
                  {item?.title}
                </Text>
                <View style={styles.date_cost}>
                  <View style={styles.date}>
                    <Text
                      style={{fontSize: 12, fontWeight: '500', lineHeight: 16}}>
                      Ngày bắt đầu:{'\n'}
                      {fDateOriginal(item?.time[0]?.timeRange[0]?.startTime)}
                    </Text>
                  </View>
                  <View style={styles.cost}>
                    {item?.fee ? (
                      <Text style={styles.cost}>{item.fee}đ </Text>
                    ) : (
                      <Text style={styles.cost}>Miễn phí </Text>
                    )}
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  course: {
    margin: 10,
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-between',
    borderBottomWidth:1,
    paddingBottom:10,
    borderBottomColor:'gray'
  },
  img_course: {
    width: '100%',
    resizeMode: 'cover',
  },
  container: {
    height: '78%',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    color: '#0071bc',
  },
  detailCourse: {
    width: '73%',

  },
  date_cost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cost: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  img: {
    // backgroundColor: 'black',
    width: 78.75,
    height: 78.75,
  },
});
export default CourseItems;
