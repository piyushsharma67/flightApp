import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { List } from 'react-native-paper'
import TravellerInfo from './TravellerInfo'
import SelectAirline from './SelectAirline'
import { FlightListObject } from '../../flightsList/types/flightListTypes'
import ContactInfo from './ContactInfo'

interface IBookingFormProps {
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
}

function BookingForm(props: IBookingFormProps) {
    return (
        <ScrollView style={style.main}>
            <List.AccordionGroup>
                <List.Accordion title="Select Airline*" id="1">
                    <SelectAirline
                        allAirlines={props.allAirlines}
                        selectedAirline={props.selectedAirline}
                        setAirline={props.setAirline}
                    />
                </List.Accordion>

                <List.Accordion title="Contact Details*" id="3">
                    <ContactInfo
                        contactInfo={props.contactInfo}
                        setEmail={props.setEmail}
                        setName={props.setName}
                        setContact={props.setContact}
                    />
                </List.Accordion>
                <List.Accordion title="Add Passenger Details*" id="2">
                    <TravellerInfo
                        setAge={props.setAge}
                        passengerDetails={props.passengerDetails}
                        setTravellingDate={props.setTravellingDate}
                        setNumberOfPessanger={props.setNumberOfPessanger}
                    />
                </List.Accordion>

            </List.AccordionGroup>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
    },
    accordionStyle: {
        marginBottom: 8
    }
})

export default React.memo(BookingForm)