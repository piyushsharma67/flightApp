import { FlightListObject } from "../../flightsList/types/flightListTypes"

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

export type TContactInfo = {
    name: string,
    email: string,
    contact: string
}

export type TPassengerDetails = {
    age: string,
    numberOfPessangers: string,
    travellingDate: string,
}

export type TBookings = {
    contactInfo: TContactInfo,
    passengerInfo: TPassengerDetails,
    selectedTrip: FlightListObject
}

export type BookFlightInitialStateType = {
    loading: boolean,
    allAirlines: string[] | [],
    selectedTrip: FlightListObject | null | undefined,
    selectedAirline: string,
    passengerDetails: TPassengerDetails,
    contactInfo: TContactInfo,
    bookings: TBookings[]
}