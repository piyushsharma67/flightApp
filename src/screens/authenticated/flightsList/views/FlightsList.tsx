import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FlightListType } from '../types/flightListTypes'
import FlightCard from './FlightCard'

interface IFlightsListProps {

    searchedFlights: FlightListType
    loading: boolean
    refreshing: boolean
    onClickCard: (id: string) => () => void
}
function FlightsList(props: IFlightsListProps) {

    return (
        <View style={style.main}>
            <FlatList
                data={props.searchedFlights}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <FlightCard
                            flight={item}
                            onClickCard={props.onClickCard(item.id)}
                        />
                    )
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16
    }
})

export default React.memo(FlightsList)