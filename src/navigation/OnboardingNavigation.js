import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logout from '../components/onboardingComponents/Logout';

import OnboardingStep2 from '../screens/OnboardingStep2';

const Stack = createNativeStackNavigator();

const OnboardingNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="BoardingStep2"
          component={OnboardingStep2}
          options={{
            headerTitle: '',
            headerRight: () => <Logout />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default OnboardingNavigation;
