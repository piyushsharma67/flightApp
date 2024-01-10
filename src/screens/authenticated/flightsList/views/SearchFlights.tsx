import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'

interface ISearchFlightsProps {
    setSource: (text: string) => void
    setDestination: (text: string) => void
    SearchFlight: () => void
    source: string
    destination: string
    shuffleSourceAndDestination: () => void
}
function SearchFlights(props: ISearchFlightsProps) {

    return (
        <View style={style.main}>
            <View style={style.inputContainer}>
                <TextInput
                    mode='outlined'
                    label={"From"}
                    numberOfLines={1}
                    style={style.input}
                    onChangeText={props.setSource}
                    value={props.source}
                />
                <TouchableOpacity onPress={props.shuffleSourceAndDestination}>
                    <Icon size={18} name="repeat" color={"purple"} />
                </TouchableOpacity>
                <TextInput
                    mode='outlined'
                    label={"To"}
                    numberOfLines={1}
                    style={style.input}
                    value={props.destination}
                    onChangeText={props.setDestination}
                />
            </View>
            <Button
                style={style.buttonStyle}
                mode='contained'
                onPress={props.SearchFlight}
            >
                Search Flights
            </Button>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 12,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '45%'
    },
    buttonStyle: {
        width: '100%',
        marginTop: 10,
        borderRadius: 4
    }
})

export default React.memo(SearchFlights)