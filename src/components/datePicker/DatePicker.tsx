import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import DateTimePicker, { DateType } from 'react-native-ui-datepicker'

interface IDatePickerProps {
    visible: boolean,
    onDismiss: () => void
    onDateSelected: (value: any) => void
    selectedValue: Date
}
function DatePicker(props: IDatePickerProps) {

    return (
        <>
            <Modal visible={props.visible} transparent >
                <TouchableOpacity style={style.main} onPress={props.onDismiss}>
                    <View style={{ backgroundColor: 'white' }}>
                        <DateTimePicker
                            value={props.selectedValue}
                            onValueChange={props.onDateSelected}
                            mode='date'
                            minimumDate={new Date()}
                            calendarTextStyle={style.calendarTextStyle}
                            headerTextStyle={style.calendarTextStyle}
                            todayTextStyle={style.calendarTextStyle}
                            weekDaysTextStyle={style.calendarTextStyle}
                            selectedTextStyle={style.selectedTextStyle}
                            selectedItemColor="blue"
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    )
}

const style = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: "#00000070",
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarTextStyle: {
        fontSize: 12,
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: 12,
        color: 'white'
    }
})

export default React.memo(DatePicker)