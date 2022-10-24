import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ForgetPassword from '../screens/ForgetPassword';
import Login from '../screens/Login';
import ResetPassword from '../screens/ResetPassword';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forget" component={ForgetPassword} />
        <Stack.Screen name="Reset" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AuthNavigation;
