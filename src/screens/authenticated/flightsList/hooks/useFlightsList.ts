import { useCallback, useEffect } from "react"
import { RootState, useAppDispatch } from "../../../../redux/store"
import { fetchFlightsList } from "../redux/thunk/flightsList.thunk"
import { useSelector } from "react-redux"
import { flightListActions } from "../redux/slice/flightsList.slice"
import { AuthenticatedRoutesEnums } from "../../../../navigation/types/authenticatedRoutes"
import { useAuthenticatedNavigation } from "../../../../navigation/hooks/navigationHooks"

function useFlightsList() {

    const dispatch = useAppDispatch()
    const { error, searchedFlights, loading, refreshing, source, destination } = useSelector((state: RootState) => state.flightsList)
    const navigation = useAuthenticatedNavigation<AuthenticatedRoutesEnums.flightListScreen>()
    const { bookings } = useSelector((state: RootState) => state.bookFlight)

    useEffect(() => {
        dispatch(fetchFlightsList())
    }, [])

    const setSource = useCallback((text: string) => {
        dispatch(flightListActions.setSource(text))
    }, [])

    const setDestination = useCallback((text: string) => {
        dispatch(flightListActions.setDestination(text))
    }, [])

    const SearchFlight = useCallback(() => {
        dispatch(flightListActions.fetchFlightsBetweenSearchAndDestThunk())
    }, [])

    const shuffleSourceAndDestination = useCallback(() => {
        dispatch(flightListActions.shuffleSourceAndDestination())
    }, [])

    function onClickCard(id: string) {
        return () => {
            navigation.navigate(AuthenticatedRoutesEnums.bookFlightScreen, {
                tripId: id
            })
        }
    }

    const onPressNotification = useCallback(() => {
        navigation.navigate(AuthenticatedRoutesEnums.bookedFlightListScreen)
    }, [])

    return {
        error,
        searchedFlights,
        loading,
        refreshing,
        source,
        destination,
        setSource,
        setDestination,
        SearchFlight,
        shuffleSourceAndDestination,
        onClickCard,
        numberOfBooking: bookings?.length ?? 0,
        onPressNotification
    }
}

export default useFlightsList