import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlightListType } from '../types/flightListTypes'
import SearchFlights from './SearchFlights'

import FlightsList from './FlightsList'
import Loader from '../../../../components/loader/Loader'
import { FAB } from 'react-native-paper'
import AppBar from '../../../../components/appBar/Appbar'
import NotificationIcon from '../../../../components/NotificationIcon/NotificationIcon'

interface IFlightListIndexProps {
    error: string
    searchedFlights: FlightListType
    loading: boolean
    refreshing: boolean
    setSource: (text: string) => void
    setDestination: (text: string) => void
    SearchFlight: () => void
    source: string
    destination: string
    shuffleSourceAndDestination: () => void
    onClickCard: (id: string) => () => void
    numberOfBooking: number
    onPressNotification: () => void
}
function FlightListIndex(props: IFlightListIndexProps) {
    return (
        <View style={{ flex: 1 }}>
            <AppBar>
                <AppBar.Content title='Select Flight' />
                <NotificationIcon value={props.numberOfBooking.toString()} onPress={props.onPressNotification} />
            </AppBar>
            <Loader loading={props.loading} />
            <SearchFlights
                setSource={props.setSource}
                setDestination={props.setDestination}
                SearchFlight={props.SearchFlight}
                source={props.source}
                destination={props.destination}
                shuffleSourceAndDestination={props.shuffleSourceAndDestination}
            />
            <FlightsList
                searchedFlights={props.searchedFlights}
                loading={props.loading}
                refreshing={props.refreshing}
                onClickCard={props.onClickCard}
            />
            {/* <FAB icon="filter" style={style.fab} /> */}
        </View>
    )
}

const style = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default FlightListIndex