import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

interface ISubmitBookingProps {
    onPressBook: () => void
}
function SubmitBooking(props: ISubmitBookingProps) {
    return (
        <View style={style.main}>
            <View>
                <Text style={style.fareHeadingText}>Total Fare</Text>
                <Text style={style.fareText}>₹ 3840</Text>
            </View>
            <Button
                style={style.buttonStyle}
                mode="contained"
                onPress={props.onPressBook}
            >
                Book
            </Button>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#C5C6D0"
    },
    buttonStyle: {
        backgroundColor: 'blue',
        borderRadius: 2
    },
    fareHeadingText: {
        color: "grey",
        fontSize: 14,
        fontWeight: '300'
    },
    fareText: {
        color: "black",
        fontSize: 14,
        fontWeight: '700'
    },

})

export default React.memo(SubmitBooking)