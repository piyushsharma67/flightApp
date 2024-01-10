import React, { useCallback } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

interface ISelectAirlineProps {
    allAirlines: string[],
    selectedAirline: string
    setAirline: (value: string) => () => void
}

function SelectAirline(props: ISelectAirlineProps) {

    const AirlinesListComp = useCallback(({ airline, selected }: { airline: string, selected: string }) => {
        return (
            <TouchableOpacity style={style.rowContainer} onPress={props.setAirline(airline)}>
                <Text style={style.text}>{airline}</Text>
                <Checkbox status={airline == props.selectedAirline ? "checked" : "unchecked"} />
            </TouchableOpacity>
        )
    }, [props.selectedAirline])

    return (
        <View style={style.main}>
            {props.allAirlines.map((airline, index) => {
                return (
                    <AirlinesListComp airline={airline} selected={props.selectedAirline} key={index} />
                )
            })}
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        padding: 16
    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: 'purple',
        fontWeight: '500'
    }
})

export default React.memo(SelectAirline)