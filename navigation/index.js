import React, { useState } from 'react';

//  these imports are used for navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// we are dealing screens in a container
import { Dashboard, SplashScreen } from '../container';


const Stack = createStackNavigator();
const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

function StackNavigation() {
    return (
        <NavigationContainer
        >
            <Stack.Navigator
                initialRouteName={"SplashScreen"}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                />
                <Stack.Screen
                  options={{ cardStyleInterpolator: forFade }}
                    name="Dashboard"
                    component={Dashboard}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const MainStack = () => {
    return (
        <StackNavigation />
    )
}
export default MainStack;
