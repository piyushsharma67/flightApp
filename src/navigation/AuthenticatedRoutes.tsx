import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlightsListScreen from '../screens/authenticated/flightsList/FlightsListScreen';
import BookFlightScreen from '../screens/authenticated/bookFlight/BookFlightScreen';
import { AuthenticatedRouteScreenParams, AuthenticatedRoutesEnums } from './types/authenticatedRoutes';
import BookedFlightListScreen from '../screens/authenticated/bookedFlightList/BookedFlightListScreen';

const Stack = createNativeStackNavigator<AuthenticatedRouteScreenParams>();

function AuthenticatedRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={AuthenticatedRoutesEnums.flightListScreen} component={FlightsListScreen} />
            <Stack.Screen name={AuthenticatedRoutesEnums.bookFlightScreen} component={BookFlightScreen} />
            <Stack.Screen name={AuthenticatedRoutesEnums.bookedFlightListScreen} component={BookedFlightListScreen} />
        </Stack.Navigator>
    )
}

export default AuthenticatedRoutes