import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import UpComingScreen from '../../screens/upComing/UpComingScreen';
import HistoryScreen from '../../screens/history/HistoryScreen';
import RatingScreen from '../../screens/rating/RatingScreen';

const Stack = createStackNavigator();

function MyOrdersStackNavigator () {
  return (
    <Stack.Navigator initialRouteName="Upcoming">
      <Stack.Screen
        name="Upcoming"
        component={UpComingScreen}
        options={{
            headerShown: false,
        }}
        />
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{
            headerShown: false,
        }}
        />
      <Stack.Screen
        name="Rating"
        component={RatingScreen}
        options={{
            headerShown: true,
        }}
        />
    </Stack.Navigator>
  );
};

export default MyOrdersStackNavigator;