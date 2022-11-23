import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const response = await AsyncStorage.setItem(`@${key}`, value);
    return response;
  } catch (e) {
    console.log(e);
    //saving error
  }
};

const getData = async key => {
  try {
    const response = await AsyncStorage.getItem(`@${key}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const removeData = async key => {
  try {
    const response = await AsyncStorage.removeItem(`@${key}`);
    return response;
  } catch (e) {
    //remove error
    console.log(e);
  }
};
export default {storeData, getData, removeData};
