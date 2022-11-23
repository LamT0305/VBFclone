import {useDispatch, useSelector} from 'react-redux';
import {
  LOADING,
  SET_ROLE,
  SET_USER,
  IS_AUTHENTICATED,
  LOGOUT,
} from '~/store/AuthSlice';
import {axios, session, jwt} from '~/components/utils';
import {API} from '~/constants';
import {useToast} from '~/hooks';

const useAuth = () => {
  const disPatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const isLoading = useSelector(state => state.auth.isLoading);
  const isRole = useSelector(state => state.auth.isRole);
  const {toast} = useToast();

  const handleAuth = async token => {
    disPatch(LOADING(true));
    try {
      const {getIdByToken, setSession} = jwt;
      if (token) {
        const id = getIdByToken(token);
        if (token && id) {
          await setSession(token);
          const res = await axios.get(API.GET(id).user);
          if (res.data.status === 'success') {
            disPatch(LOADING(false));
            return disPatch(SET_USER(res.data.user));
          }
          return false;
        }
      }
      disPatch(LOADING(false));
      return false;
    } catch (e) {
      console.log(e);
      disPatch(LOADING(false));
    }
  };

  const handleLogin = async form => {
    disPatch(LOADING(true));
    try {
      const response = await axios.post(API.POST().login, form);

      console.log(response.data);
      // if success, if failed
      if (response.data.status === 'success') {
        disPatch(IS_AUTHENTICATED(true));
        const isAuth = await handleAuth(response.data.data);
        if (isAuth) {
          return toast.show('Đăng nhập thành công', {
            type: 'success',
            placement: 'top',
            duration: 4000,
            offset: 30,
          });
        }
        disPatch(LOADING(false));
      } else if (response.data.status === 'error') {
        disPatch(LOADING(false));
        return toast.show('Sai tên đăng nhập hoặc mật khẩu', {type: 'danger'});
      }
      // set user => set token, setIsAuthenticate
      // loading false
    } catch (e) {
      console.log(e);
      disPatch(LOADING(false));
    }
  };
  const handleChangeRole = async role => {
    disPatch(SET_ROLE(role));
  };
  const handleRegister = async form => {
    disPatch(LOADING(true));
    try {
      const response = await axios.post(
        'https://d31mp7dmwh32b5.cloudfront.net/api/registerLawyer',
        form,
      );
      console.log(response);
      if (response.data.status === 'success') {
        disPatch(LOADING(false));
        return toast.show('Đăng ký thành công', {type: 'success'});
      }
    } catch (e) {
      console.log(e);
      disPatch(LOADING(false));
      return toast.show('Đã có lỗi sảy ra. vui lòng quay lại sau', {
        type: 'danger',
      });
    }
  };
  return {
    isRole,
    user,
    isLoading,
    isAuthenticated,
    handleLogin,
    handleChangeRole,
    handleRegister,
    handleAuth,
  };
};

export default useAuth;
