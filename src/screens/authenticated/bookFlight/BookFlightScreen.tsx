import React from 'react'
import { View } from 'react-native'
import BookFlightIndex from './view'
import useBookFlight from './hooks/useBookFlight'

function BookFlightScreen() {
    const {
        selectedTrip,
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
        numberOfBooking,
        loading
    } = useBookFlight()
    return (
        <BookFlightIndex
            error={error}
            selectedTrip={selectedTrip}
            selectedAirline={selectedAirline}
            contactInfo={contactInfo}
            passengerDetails={passengerDetails}
            setNumberOfPessanger={setNumberOfPessanger}
            setAirline={setAirline}
            setTravellingDate={setTravellingDate}
            navigateBack={navigateBack}
            allAirlines={allAirlines}
            setEmail={setEmail}
            setName={setName}
            setAge={setAge}
            setContact={setContact}
            onPressBook={onPressBook}
            onPressNotification={onPressNotification}
            numberOfBooking={numberOfBooking}
            loading={loading}
        />
    )
}

export default BookFlightScreen