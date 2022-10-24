import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import AuthNavigation from './src/navigation/AuthNavigation';
import OnboardingNavigation from './src/navigation/OnboardingNavigation';

const App = () => {
  const [login, setLogin] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('authData');
      if (value !== null) {
        setLogin(true);
      }
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
    return <></>;
  }
};
export default App;
