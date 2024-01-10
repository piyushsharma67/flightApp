import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

export enum AuthenticatedRoutesEnums {
    flightListScreen = "flightListScreen",
    bookFlightScreen = "BookFlightScreen",
    bookedFlightListScreen = "bookedFlightListScreen"
}

export type AuthenticatedRouteScreenParams = {
    [AuthenticatedRoutesEnums.flightListScreen]: undefined,
    [AuthenticatedRoutesEnums.bookFlightScreen]: {
        tripId: string
    },
    [AuthenticatedRoutesEnums.bookedFlightListScreen]: undefined
}

export type AuthenticatedNavProps<
    S extends AuthenticatedRoutesEnums
> = NativeStackScreenProps<AuthenticatedRouteScreenParams, S>;

export type AuthenticatedNavigationType<
    S extends AuthenticatedRoutesEnums
> = NativeStackNavigationProp<AuthenticatedRouteScreenParams, S>;