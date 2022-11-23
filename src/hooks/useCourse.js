import {useDispatch, useSelector} from 'react-redux';
import {LOADING, GET_COURSE, CHANGE_TAG} from '~/store/CourseSlice';
import {axios} from '~/components/utils';
import {API} from '~/constants';
import {useToast} from '.';

const useCourse = () => {
  const disPatch = useDispatch();
  const isLoading = useSelector(state => state.course.isLoading);
  const courses = useSelector(state => state.course.courses);
  const totalCourseLength = useSelector(
    state => state.course.totalCourseLength,
  );
  const tagCourse = useSelector(state => state.course.tagCourse);
  const {toast} = useToast();

  const handleChangeCourseTag = value => disPatch(CHANGE_TAG(value));

  const handleGetCourse = async page => {
    disPatch(LOADING(true));
    try {
      const response = await axios.get(`${API.GET().courses}?page=${page}`);
      if (response.data.status === 'success') {
        if (page == 1) {
          disPatch(GET_COURSE(response.data.courses));
        } else {
          const newCourseArray = [...courses, ...response.data.courses];
          disPatch(GET_COURSE(newCourseArray));
        }
        disPatch(LOADING(false));
      }
    } catch (e) {
      console.log(e);
      disPatch(LOADING(false));
    }
  };

  const handleSearchCourse = async (search, page = 1) => {
    try {
      const res = await axios.post(API.POST().courseSearch, {
        keyword: search,
        page,
      });
      if (res.data.status === 'success') {
        return res.data;
      }
      return false;
    } catch (e) {
      console.log(e);
    }
  };
  return {
    totalCourseLength,
    tagCourse,
    isLoading,
    courses,
    handleGetCourse,
    handleChangeCourseTag,
    handleSearchCourse,
  };
};
export default useCourse;
