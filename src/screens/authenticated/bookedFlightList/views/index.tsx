import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppBar from '../../../../components/appBar/Appbar'
import { TBookings } from '../../bookFlight/types/bookFlightTypes'
import BookingsList from './BookingsList'

interface IBookedFlightListIndexProps {
    bookings: TBookings[]
    onPressBack: () => void
}
function BookedFlightListIndex(props: IBookedFlightListIndexProps) {
    return (
        <View style={style.main}>
            <AppBar>
                <AppBar.BackAction onPress={props.onPressBack} />
                <AppBar.Content title='Booked Flights' />
            </AppBar>
            <BookingsList bookings={props.bookings} />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1
    }
})

export default BookedFlightListIndex