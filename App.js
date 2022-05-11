import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EventList from './EventList';
import EventForm from './EventForm';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EventList">
        <Stack.Screen
          name="EventList"
          component={EventList}
          options={{ title: "Your Events" }}
        />
        <Stack.Screen
          name="EventForm"
          component={EventForm}
          options={{ title: "Add Event" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
