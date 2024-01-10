import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'

interface IContactInfoProps {
    contactInfo: { name: string, email: string, contact: string }
    setName: (value: string) => void
    setEmail: (value: string) => void
    setContact: (value: string) => void
}

function ContactInfo(props: IContactInfoProps) {
    return (
        <View style={style.main}>
            <TextInput
                mode='outlined'
                label="Enter Name"
                style={style.input}
                value={props.contactInfo.name}
                onChangeText={props.setName}
            />
            <TextInput
                mode='outlined'
                label="Enter Email"
                style={style.input}
                value={props.contactInfo.email}
                onChangeText={props.setEmail}
            />
            <TextInput
                mode='outlined'
                label="Enter Contact"
                style={style.input}
                keyboardType='numeric'
                maxLength={10}
                value={props.contactInfo.contact}
                onChangeText={props.setContact}
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

export default React.memo(ContactInfo)