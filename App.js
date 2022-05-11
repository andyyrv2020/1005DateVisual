import EventList from './EventList';
import EventForm from './EventForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EventList">
        <Stack.Screen name="EventList" component={EventList} options={{ title: 'Your Events' }} />
        <Stack.Screen name="EventForm" component={EventForm} options={{ title: 'Event Creator' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

