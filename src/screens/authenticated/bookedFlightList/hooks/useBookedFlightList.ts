import { useCallback, useEffect } from "react";
import { useAuthenticatedNavigation } from "../../../../navigation/hooks/navigationHooks";
import { AuthenticatedRoutesEnums } from "../../../../navigation/types/authenticatedRoutes";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { BackHandler } from "react-native";

function useBookedFlightList() {

    const navigation = useAuthenticatedNavigation()
    const { bookings } = useSelector((state: RootState) => state.bookFlight)

    const onPressBack = useCallback(() => {
        navigation.navigate(AuthenticatedRoutesEnums.flightListScreen)
    }, [])

    useEffect(() => {
        const navback = () => {
            navigation.navigate(AuthenticatedRoutesEnums.flightListScreen)
            return true
        }
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            navback,
        );

        return () => backHandler.remove();
    }, [])

    return {
        bookings,
        onPressBack
    }
}

export default useBookedFlightList