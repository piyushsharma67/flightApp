import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import DatePickerButton from '../../../../components/datePicker/index'

interface ITravellerInfoProps {
    passengerDetails: { travellingDate: any, age: string, numberOfPessangers: string }
    setTravellingDate: (value: string) => void
    setNumberOfPessanger: (value: string) => void
    setAge: (value: string) => void
}
function TravellerInfo(props: ITravellerInfoProps) {
    return (
        <View style={style.main}>
            <TextInput
                mode='outlined'
                label="Enter Number Of Passengers"
                style={style.input}
                value={props.passengerDetails.numberOfPessangers}
                onChangeText={props.setNumberOfPessanger}
            />
            <TextInput
                mode='outlined'
                label="Enter Age"
                style={style.input}
                maxLength={3}
                keyboardType='numeric'
                value={props.passengerDetails.age}
                onChangeText={props.setAge}
            />
            <DatePickerButton
                onDateSelected={props.setTravellingDate}
                selectedValue={props.passengerDetails.travellingDate}
            />

        </View>
    )
}

const style = StyleSheet.create({
    main: {
        width: '100%',
        justifyContent: 'center'
    },
    input: {
        marginVertical: 8
    }
})

export default TravellerInfo