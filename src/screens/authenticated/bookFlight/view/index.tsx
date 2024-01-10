import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import AppBar from '../../../../components/appBar/Appbar'
import { FlightListObject } from '../../flightsList/types/flightListTypes'
import FlightDetails from './FlightDetails'
import BookingForm from './BookingForm'
import SubmitBooking from './SubmitBooking'
import { Badge, IconButton, Snackbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'
import NotificationIcon from '../../../../components/NotificationIcon/NotificationIcon'
import Loader from '../../../../components/loader/Loader'

interface IBookFlightIndexProps {
    error: string
    selectedTrip: FlightListObject | null | undefined
    selectedAirline: string
    setNumberOfPessanger: (value: string) => void
    setAirline: (value: string) => () => void
    setTravellingDate: (value: string) => void
    navigateBack: () => void
    allAirlines: string[]
    contactInfo: { name: string, email: string, contact: string }
    passengerDetails: { travellingDate: any, age: string, numberOfPessangers: string }
    setEmail: (value: string) => void
    setName: (value: string) => void
    setAge: (value: string) => void
    setContact: (value: string) => void
    onPressBook: () => void
    numberOfBooking: number
    onPressNotification: () => void
    loading: boolean
}

function BookFlightIndex(props: IBookFlightIndexProps) {

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={style.main}>
                <Loader loading={props.loading} />
                <AppBar>
                    <AppBar.BackAction onPress={props.navigateBack} />
                    <AppBar.Content title='Book Flight' />
                    <NotificationIcon value={props.numberOfBooking.toString()} onPress={props.onPressNotification} />
                </AppBar>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlightDetails
                        //@ts-ignore
                        selectedTrip={props.selectedTrip}
                    />
                    <BookingForm
                        selectedAirline={props.selectedAirline}
                        contactInfo={props.contactInfo}
                        passengerDetails={props.passengerDetails}
                        setNumberOfPessanger={props.setNumberOfPessanger}
                        setAirline={props.setAirline}
                        setTravellingDate={props.setTravellingDate}
                        navigateBack={props.navigateBack}
                        allAirlines={props.allAirlines}
                        setEmail={props.setEmail}
                        setName={props.setName}
                        setAge={props.setAge}
                        setContact={props.setContact}
                    />
                </ScrollView>
                <View style={style.flightFare}>
                    <SubmitBooking onPressBook={props.onPressBook} />
                </View>
                <Snackbar
                    visible={props.error ? true : false}
                    onDismiss={() => console.log('sas')}
                >
                    {props.error}
                </Snackbar>
            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
    },
    flightFare: {
        position: 'relative',
        bottom: 0,
        left: 0,
        width: '100%',
    }
})

export default BookFlightIndex