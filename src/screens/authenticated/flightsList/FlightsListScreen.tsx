import React from 'react'
import FlightListIndex from './views'
import useFlightsList from './hooks/useFlightsList'

function FlightsListScreen() {

    const {
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
        numberOfBooking,
        onPressNotification
    } = useFlightsList()

    return (
        <FlightListIndex
            error={error}
            searchedFlights={searchedFlights}
            loading={loading}
            refreshing={refreshing}
            setSource={setSource}
            setDestination={setDestination}
            SearchFlight={SearchFlight}
            source={source}
            destination={destination}
            shuffleSourceAndDestination={shuffleSourceAndDestination}
            onClickCard={onClickCard}
            numberOfBooking={numberOfBooking}
            onPressNotification={onPressNotification}
        />
    )
}

export default FlightsListScreen