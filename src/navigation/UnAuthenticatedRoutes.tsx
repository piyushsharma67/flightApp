import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/authentication/login/LoginScreen';

const Stack = createNativeStackNavigator();

function UnAuthenticatedRoutes() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='OtpScreen' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default UnAuthenticatedRoutes