import React, { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TBookings } from '../../bookFlight/types/bookFlightTypes';
import Icon from 'react-native-vector-icons/FontAwesome5'

interface IBookingCardProps {
    booking: TBookings
}
function BookingCard(props: IBookingCardProps) {

    const arrivalTimeFunc = useCallback((dateTimeString: string) => {
        const dateTime = new Date(dateTimeString);
        // Extracting date components
        const year = dateTime.getFullYear();
        const month = dateTime.getMonth() + 1; // Months are zero-based, so we add 1
        const day = dateTime.getDate();
        // Extracting time components
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        // Returning the result
        return {
            date: `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`,
            time: `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`,
        };
    }, [props.booking])

    const durationTimeFunc = useCallback(({ start, end }: { start: string, end: string }) => {

        const startTime = new Date(start);
        const endTime = new Date(end)
        // Extracting time components
        const starthours = startTime.getHours();
        const startminutes = startTime.getMinutes();
        const endhours = endTime.getHours();
        const endminutes = endTime.getMinutes();
        // Returning the result
        return `${endhours - starthours}h ${endminutes - startminutes}m`
    }, [props.booking])

    const startTime = arrivalTimeFunc(props.booking.selectedTrip.displayData.source.depTime)
    const arrivalTime = arrivalTimeFunc(props.booking.selectedTrip.displayData.destination.arrTime)
    const durationTime = durationTimeFunc({ start: props.booking.selectedTrip.displayData.source.depTime, end: props.booking.selectedTrip.displayData.destination.arrTime })
    const sourceTerminal = `(T${props.booking.selectedTrip.displayData.source.airport.terminal})`
    const destinationTerminal = `(T${props.booking.selectedTrip.displayData.destination.airport.terminal})`

    return (
        <View style={style.main}>
            <View style={style.contactInfo}>
                <Text style={style.infotext}>Name: {props.booking.contactInfo.name}</Text>
                <Text style={style.infotext}>Email: {props.booking.contactInfo.email}</Text>
                <Text style={style.infotext}>Contact: {props.booking.contactInfo.contact}</Text>
                <Text style={style.infotext}>Age: {props.booking.passengerInfo.age}</Text>
                <Text style={style.infotext}>Number of Pessangers: {props.booking.passengerInfo.numberOfPessangers}</Text>
                <Text style={style.infotext}>Travelling Date: {props.booking.passengerInfo.travellingDate}</Text>
            </View>
            <View style={style.flightDetailSummary}>
                <View style={style.bookingTimingSummary}>
                    <View style={style.bookingTimingContainer}>
                        <View style={style.timeContainer}>
                            <Text style={style.timeText}>{startTime.time}</Text>
                        </View>
                        <View style={style.terminalAndDurationSummaryContainer}>
                            <Text style={style.terminalAndDurationSummaryText}>{sourceTerminal} -- {durationTime} -- {destinationTerminal}</Text>
                        </View>
                        <View style={style.timeContainer}>
                            <Text style={style.timeText}>{arrivalTime.time}</Text>
                        </View>
                    </View>
                    <View style={style.bookingSummary}>
                        <Text style={style.bookingTypeText}>{props.booking.selectedTrip.displayData.stopInfo}</Text>
                        <Text style={style.bookingNameText}>{props.booking.selectedTrip.displayData.airlines[0].airlineName} - {props.booking.selectedTrip.displayData.airlines[0].flightNumber}</Text>
                    </View>
                    <View style={style.arrDest}>
                        <Icon name="plane-departure" size={20} color="purple" />
                        <Text style={style.timeText}>{props.booking?.selectedTrip?.displayData.source.airport.cityName}</Text>
                        <Icon name="plane-arrival" size={20} color="purple" />
                        <Text style={style.timeText}>{props.booking?.selectedTrip?.displayData.destination.airport.cityName}</Text>
                    </View>
                </View>
                <View style={style.costSummary}>
                    <Text style={style.timeText}>₹ {props.booking.selectedTrip.fare}</Text>
                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    main: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 18,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    flightDetailSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bookingTimingSummary: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookingTimingContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    timeContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    timeText: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    terminalAndDurationSummaryContainer: {
        height: '100%',
        width: '50%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    terminalAndDurationSummaryText: {
        fontSize: 10,
        color: 'grey'
    },
    costSummary: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookingSummary: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 6
    },
    bookingTypeText: {
        fontSize: 12,
        marginRight: 4,
        color: 'black'
    },
    bookingNameText: {
        fontSize: 12,
        marginRight: 4,
        color: 'purple'
    },
    contactInfo: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 8
    },
    infotext: {
        fontSize: 14,
        color: 'purple',
        fontWeight: '300'
    },
    arrDest: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10
    }
})

export default React.memo(BookingCard)