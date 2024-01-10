import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AuthenticatedNavigationType, AuthenticatedRouteScreenParams, AuthenticatedRoutesEnums } from "../types/authenticatedRoutes";

export const useAuthenticatedNavigation = <S extends AuthenticatedRoutesEnums>() =>
    useNavigation<AuthenticatedNavigationType<S>>();

export const useAuthenticatedRoute = <S extends AuthenticatedRoutesEnums>() =>
    useRoute<RouteProp<AuthenticatedRouteScreenParams, S>>();