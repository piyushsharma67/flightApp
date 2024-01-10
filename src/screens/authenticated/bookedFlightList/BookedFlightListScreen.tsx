import React from 'react'
import { View } from 'react-native'
import BookedFlightListIndex from './views'
import useBookedFlightList from './hooks/useBookedFlightList'

function BookedFlightListScreen() {

    const {
        bookings,
        onPressBack
    } = useBookedFlightList()
    return (
        <BookedFlightListIndex
            bookings={bookings}
            onPressBack={onPressBack}
        />
    )
}

export default BookedFlightListScreen