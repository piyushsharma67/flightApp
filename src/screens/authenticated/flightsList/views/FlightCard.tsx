import React, { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlightListObject } from '../types/flightListTypes'
import Icon from 'react-native-vector-icons/FontAwesome5'

interface IFlightCardProps {
    flight: FlightListObject
    onClickCard: () => void
}

function FlightCard(props: IFlightCardProps) {

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
    }, [props.flight])

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
    }, [props.flight])

    const startTime = arrivalTimeFunc(props.flight.displayData.source.depTime)
    const arrivalTime = arrivalTimeFunc(props.flight.displayData.destination.arrTime)
    const durationTime = durationTimeFunc({ start: props.flight.displayData.source.depTime, end: props.flight.displayData.destination.arrTime })
    const sourceTerminal = `(T${props.flight.displayData.source.airport.terminal})`
    const destinationTerminal = `(T${props.flight.displayData.destination.airport.terminal})`

    return (
        <TouchableOpacity style={style.main} onPress={props.onClickCard ?? null}>
            <View style={style.flightTimingSummary}>
                <View style={style.flightTimingContainer}>
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
                <View style={style.flightSummary}>
                    <Text style={style.flightTypeText}>{props.flight.displayData.stopInfo}</Text>
                    <Text style={style.flightNameText}>{props.flight.displayData.airlines[0].airlineName} - {props.flight.displayData.airlines[0].flightNumber}</Text>
                </View>
                <View style={style.arrDest}>
                    <Icon name="plane-departure" size={20} color="purple" />
                    <Text style={style.timeText}>{props.flight?.displayData?.source.airport.cityName}</Text>
                    <Icon name="plane-arrival" size={20} color="purple" />
                    <Text style={style.timeText}>{props.flight?.displayData?.destination.airport.cityName}</Text>
                </View>
            </View>
            <View style={style.costSummary}>
                <Text style={style.timeText}>₹ {props.flight.fare}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    main: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        backgroundColor: 'white'
    },
    flightTimingSummary: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flightTimingContainer: {
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
    flightSummary: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 6
    },
    flightTypeText: {
        fontSize: 12,
        marginRight: 4,
        color: 'black'
    },
    flightNameText: {
        fontSize: 12,
        marginRight: 4,
        color: 'purple'
    },
    arrDest: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10
    }
})

export default React.memo(FlightCard)