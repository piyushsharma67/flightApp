import { createSlice } from "@reduxjs/toolkit"
import { BookFlightInitialStateType, TBookings } from "../../types/bookFlightTypes"
import { sumbitBookingThunk } from "../thunk/bookFlight.thunk"

const initialState = {
    selectedTrip: null,
    selectedAirline: "",
    allAirlines: [],
    loading: false,
    passengerDetails: {
        age: "",
        numberOfPessangers: "",
        travellingDate: "",
    },
    contactInfo: {
        name: "",
        email: "",
        contact: ""
    },
    bookings: []
} as BookFlightInitialStateType

const bookFlightSlice = createSlice({
    name: 'BookFlightSlice',
    initialState,
    reducers: {
        resetState: (state) => {
            state = {
                ...state,

                selectedTrip: null,
                selectedAirline: "",
                loading: false,
                passengerDetails: {
                    age: "",
                    numberOfPessangers: "",
                    travellingDate: ""
                }, contactInfo: {
                    name: "",
                    email: "",
                    contact: ""
                }
            }
        },
        setSelectedTrip: (state, action) => {
            state.selectedTrip = action.payload
            const allAlirlines = state.selectedTrip?.displayData.airlines.map((item) => `${item.airlineName}`)
            //@ts-ignore
            state.allAirlines = allAlirlines

        },
        setSelectedAirline: (state, action) => {
            state.selectedAirline = action.payload
        },
        setNumberOfPessanger: (state, action) => {
            state.passengerDetails.numberOfPessangers = action.payload
        },
        setTravellingDate: (state, action) => {
            state.passengerDetails.travellingDate = action.payload
        },
        setAge: (state, action) => {
            state.passengerDetails.age = action.payload
        },
        setName: (state, action) => {
            state.contactInfo.name = action.payload
        },
        setEmail: (state, action) => {
            state.contactInfo.email = action.payload
        },
        setContact: (state, action) => {
            state.contactInfo.contact = action.payload
        },
        addNewBooking: (state, action) => {
            const booking: TBookings = {
                contactInfo: state.contactInfo,
                passengerInfo: state.passengerDetails,
                selectedTrip: state.selectedTrip!
            }
            state.bookings.push(booking)
        },
    },
    extraReducers(builder) {
        builder.addCase(sumbitBookingThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(sumbitBookingThunk.fulfilled, (state, action) => {
            state.loading = false
            const booking: TBookings = {
                contactInfo: state.contactInfo,
                passengerInfo: state.passengerDetails,
                selectedTrip: state.selectedTrip!
            }
            state.bookings.push(booking)
        })
        builder.addCase(sumbitBookingThunk.rejected, (state, action) => {
            state.loading = false
        })
    }
})

export const bookFlightActions = { ...bookFlightSlice.actions, sumbitBookingThunk }
export default bookFlightSlice.reducer