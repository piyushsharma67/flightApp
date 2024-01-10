import React from 'react'
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';


interface ILoaderProps {
    loading: boolean
}

function Loader(props: ILoaderProps) {

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Modal
            transparent={true}
            statusBarTranslucent
            visible={props.loading}
        >
            <View style={style.main}>
                <View style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size={'large'} color="white" />
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: "#00000070",
    }
})

export default React.memo(Loader)