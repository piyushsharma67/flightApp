import React from 'react'
import LoginScreentIndex from './view'
import useLoginHook from './hooks/useLoginHook'

function LoginScreen() {
    const {
        loading,
        currentScreen,
        onPressSubmitOtp,
        onPressValidateOtp,
        onGoBack,
        onPressMobile
    } = useLoginHook()
    return (
        <LoginScreentIndex
            loading={loading}
            currentScreen={currentScreen}
            onPressSubmitOtp={onPressSubmitOtp}
            onPressValidateOtp={onPressValidateOtp}
            onGoBack={onGoBack}
            onPressMobile={onPressMobile}
        />
    )
}

export default LoginScreen