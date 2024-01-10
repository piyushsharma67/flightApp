type Airport = {
    cityCode: string,
    cityName: string,
    terminal: number,
    airportCode: string,
    airportName: string,
    countryCode: string,
    countryName: string
}

export type TAirlines = {
    airlineCode: string,
    airlineName: string,
    flightNumber: number
}

export type FlightListObject = {
    id: string,
    fare: 3840,
    displayData: {
        source: {
            airport: Airport,
            depTime: string
        },
        airlines: TAirlines[],
        stopInfo: string,
        destination: {
            airport: Airport,
            arrTime: string
        },
        totalDuration: string
    }
}

export type FlightListType = FlightListObject[]
export type SearchedFlightListObject = {
    id: string,
    fare: 3840,
    displayData: {
        source: {
            airport: Airport,
            depTime: string
        },
        airlines: {
            airlineCode: string,
            airlineName: string,
            flightNumber: number
        },
        stopInfo: string,
        destination: {
            airport: Airport,
            arrTime: string
        },
        totalDuration: string
    }
}

export type FlightListInitialStateType = {
    flightsList: FlightListType,
    loading: boolean,
    refreshing: boolean,
    error: string,
    source: string,
    destination: string,
    searchedFlights: FlightListType,
    allAirlines: string[],
    selectedTrip: FlightListObject | null | undefined
}