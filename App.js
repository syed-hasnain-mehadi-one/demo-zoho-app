import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import Loader from './src/components/shared/Loader';
import AuthNavigation from './src/navigation/AuthNavigation';
import OnboardingNavigation from './src/navigation/OnboardingNavigation';

const App = () => {
  const [login, setLogin] = useState('');
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('authData');
      if (value !== null) setLogin(true);
      else setLogin(false);
    } catch (e) {
      console.log('error', e);
      setLogin(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (login === false) {
    return <AuthNavigation />;
  } else if (login === true) {
    return <OnboardingNavigation />;
  } else {
    return <Loader />;
  }
};
export default App;
