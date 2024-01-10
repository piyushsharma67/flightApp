import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchFlightsBetweenSearchAndDestThunk, fetchFlightsList } from "../thunk/flightsList.thunk"
import { FlightListInitialStateType, FlightListType } from "../../types/flightListTypes"

const initialState = {
    flightsList: [],
    loading: false,
    refreshing: false,
    error: "",
    source: "",
    destination: "",
    searchedFlights: [],
    allAirlines: [],
    selectedTrip: null
} as FlightListInitialStateType

const flightsListSlice = createSlice({
    name: 'BookFlightSlice',
    initialState,
    reducers: {
        resetState: (state) => {
            state = { ...state, error: "" }
        },
        setSource: (state, action) => {
            state.source = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        shuffleSourceAndDestination: (state) => {
            const temp = state.source
            state.source = state.destination
            state.destination = temp
        },
        getFlightDetails: (state, action) => {
            state.selectedTrip = state.searchedFlights.find((item) => item.id == action.payload)
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchFlightsList.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchFlightsList.fulfilled, (state, action: PayloadAction<FlightListType>) => {
            state.flightsList = action.payload
            state.searchedFlights = []
            state.loading = false
        })
        builder.addCase(fetchFlightsList.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })
        builder.addCase(fetchFlightsBetweenSearchAndDestThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchFlightsBetweenSearchAndDestThunk.fulfilled, (state, action: PayloadAction<FlightListType>) => {
            const searchedFlights = state.flightsList.filter((item) => {
                if (item.displayData.source.airport.cityName.toLowerCase() == state.source.toLowerCase() && item.displayData.destination.airport.cityName.toLowerCase() == state.destination.toLowerCase()) {
                    return true
                }
                return false
            })
            state.searchedFlights = searchedFlights
            state.loading = false
        })
        builder.addCase(fetchFlightsBetweenSearchAndDestThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })
    },
})

export const flightListActions = { ...flightsListSlice.actions, fetchFlightsBetweenSearchAndDestThunk }
export default flightsListSlice.reducer


// const allAirlines = state.flightsList.map((item) => item.displayData.airlines[0].airlineName)
// const airlinesNameList = allAirlines.reduce((accumulator, currentValue) => {
//     if (!accumulator.includes(currentValue)) {
//         accumulator.push(currentValue)
//     }
//     return accumulator
// }, [] as string[])
// state.allAirlines = airlinesNameList