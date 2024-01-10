import React, { ReactNode, useCallback, useState } from 'react'
import { Button } from 'react-native-paper'
import DatePicker from './DatePicker'
import { StyleSheet } from 'react-native'

interface IDatePickerButtonProps {
    onDateSelected: (val: any) => void
    selectedValue: any
    children?: ReactNode,
    mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
}

function DatePickerButton(props: IDatePickerButtonProps) {
    const [visible, setVisible] = useState(false)

    const togglePicker = useCallback(() => {
        setVisible(!visible)
    }, [visible])

    return (
        <>
            {props.children ?? <Button
                mode={props.mode ?? "contained"}
                onPress={togglePicker}
                style={style.main}
            >
                {props.selectedValue ? `Edit Date - ${props.selectedValue}` : "Select Date"}
            </Button>}
            <DatePicker visible={visible}
                onDismiss={togglePicker}
                onDateSelected={props.onDateSelected}
                selectedValue={props.selectedValue} />
        </>
    )
}

const style = StyleSheet.create({
    main: {
        width: '100%',
        borderRadius: 2,
        marginBottom: 8
    }
})
export default React.memo(DatePickerButton)