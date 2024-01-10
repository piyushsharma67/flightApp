import { useCallback, useEffect, useState } from "react"
import { useAuthenticatedNavigation, useAuthenticatedRoute } from "../../../../navigation/hooks/navigationHooks"
import { AuthenticatedRoutesEnums } from "../../../../navigation/types/authenticatedRoutes"
import { RootState, useAppDispatch } from "../../../../redux/store"
import { flightListActions } from "../../flightsList/redux/slice/flightsList.slice"
import { useSelector } from "react-redux"
import { bookFlightActions } from "../redux/slice/bookFlight.slice"

function useBookFlight() {

    const navigation = useAuthenticatedNavigation<AuthenticatedRoutesEnums.bookFlightScreen>()
    const routes = useAuthenticatedRoute<AuthenticatedRoutesEnums.bookFlightScreen>()
    const dispatch = useAppDispatch()

    const { selectedTrip } = useSelector((state: RootState) => state.flightsList)
    const {
        selectedTrip: selectedTripDetails,
        selectedAirline,
        allAirlines,
        contactInfo,
        passengerDetails,
        bookings,
        loading
    } = useSelector((state: RootState) => state.bookFlight)

    const [error, setError] = useState("")
    useEffect(() => {
        dispatch(flightListActions.getFlightDetails(routes.params.tripId))

        return () => {
            dispatch(bookFlightActions.resetState())
        }
    }, [])

    useEffect(() => {
        dispatch(bookFlightActions.setSelectedTrip(selectedTrip))
    }, [selectedTrip])

    const setNumberOfPessanger = useCallback((value: string) => {
        dispatch(bookFlightActions.setNumberOfPessanger(value))
    }, [])

    const setTravellingDate = useCallback((value: string) => {
        dispatch(bookFlightActions.setTravellingDate(value))
    }, [])

    const setName = useCallback((value: string) => {
        dispatch(bookFlightActions.setName(value))
    }, [])

    const setEmail = useCallback((value: string) => {
        dispatch(bookFlightActions.setEmail(value))
    }, [])

    const setContact = useCallback((value: string) => {
        dispatch(bookFlightActions.setContact(value))
    }, [])

    const setAge = useCallback((value: string) => {
        dispatch(bookFlightActions.setAge(value))
    }, [])

    const setAirline = useCallback((value: string) => {
        return useCallback(() => {
            dispatch(bookFlightActions.setSelectedAirline(value))
        }, [])
    }, [])

    const navigateBack = useCallback(() => {
        navigation.goBack()
    }, [])

    const onPressNotification = useCallback(() => {
        navigation.navigate(AuthenticatedRoutesEnums.bookedFlightListScreen)
    }, [])

    async function onPressBook() {
        try {
            if (!selectedAirline) {
                throw new Error('Select Airline!!')
            } else if (!contactInfo.contact || !contactInfo.email || !contactInfo.name) {
                throw new Error("Enter all Contact feilds")
            } else if (!passengerDetails.age || !passengerDetails.numberOfPessangers || !passengerDetails.travellingDate) {
                throw new Error("Enter all Passenger details feilds")
            }

            const response = await dispatch(bookFlightActions.sumbitBookingThunk())

            if (response.meta.requestStatus == 'fulfilled') {
                onPressNotification()
            }
        } catch (error: any) {
            setError(error.message)
            setTimeout(() => {
                setError("")
            }, 2000)
        }
    }

    return {
        selectedTrip: selectedTripDetails,
        selectedAirline,
        allAirlines,
        contactInfo,
        passengerDetails,
        error,
        setNumberOfPessanger,
        setAirline,
        setTravellingDate,
        navigateBack,
        setName,
        setEmail,
        setAge,
        setContact,
        onPressBook,
        onPressNotification,
        numberOfBooking: bookings?.length ?? 0,
        loading
    }
}

export default useBookFlight