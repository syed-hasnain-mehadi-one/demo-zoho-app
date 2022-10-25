import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

import AuthContext from './src/context/AuthContext';
import AuthNavigation from './src/navigation/AuthNavigation';
import OnboardingNavigation from './src/navigation/OnboardingNavigation';

const App = () => {
  const [user, setUser] = useState({});
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('authData');
      console.log('value-->', value);
      if (value !== null) {
        setUser(JSON.parse(value));
      } else setLogin({});
    } catch (e) {
      console.log('error', e);
      setUser({});
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {user.email ? <OnboardingNavigation /> : <AuthNavigation />}
    </AuthContext.Provider>
  );
};
export default App;
