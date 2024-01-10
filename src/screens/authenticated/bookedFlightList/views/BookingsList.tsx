import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { TBookings } from '../../bookFlight/types/bookFlightTypes'
import BookingCard from './BookingCard'

interface IBookingsListProps {
    bookings: TBookings[]
}
function BookingsList(props: IBookingsListProps) {
    return (
        <View style={style.main}>
            <FlatList
                data={props.bookings}
                keyExtractor={(item, index) => `${item.selectedTrip.id}=${index}`}
                renderItem={({ item }) => {
                    return (
                        <BookingCard booking={item} />
                    )
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        padding: 16
    }
})

export default React.memo(BookingsList)