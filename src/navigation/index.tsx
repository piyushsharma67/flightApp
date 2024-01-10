import React from 'react-native'
import UnAuthenticatedRoutes from './UnAuthenticatedRoutes'
import AuthenticatedRoutes from './AuthenticatedRoutes'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const Stack = createNativeStackNavigator();

function AppNavigationIndex() {
    const profile = useSelector((state: RootState) => state.login.profile)
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!profile.token && <Stack.Screen name="UnAuthenticatedRoutes" component={UnAuthenticatedRoutes} />}
            <Stack.Screen name="AuthenticatedRoutes" component={AuthenticatedRoutes} />
        </Stack.Navigator>
    )
}

export default AppNavigationIndex