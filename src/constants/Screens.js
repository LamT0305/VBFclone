import {LogIn, SignUp, Home} from '~/screens';

const screenName = {
  home: 'Home',
  //auth
  login: 'LogIn',
  signup: 'SignUp',
};

const navigateAuth = [
  {name: screenName.login, component: LogIn},
  {name: screenName.signup, component: SignUp},
];

const navigateGuard = [
    {name:screenName.home, component: Home}
]

const screenDefault = {
  navigateAuth,
  screenName,
  navigateGuard
};

export default screenDefault;
