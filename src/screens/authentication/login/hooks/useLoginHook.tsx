import { useCallback, useState } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../../../redux/store"
import { requestOtpThunk, validateOtpThunk } from "../redux/thunk/login.thunk"

const loginFragments = {
    requestOtp: 1,
    validateOtp: 2
}

function useLoginHook() {

    const [currentScreen, setScreen] = useState(loginFragments.requestOtp)
    const { profile, error, loading, otpSent, screenState } = useSelector((state: RootState) => state.login)
    const dispatch = useAppDispatch()

    const onPressSubmitOtp = useCallback(async () => {
        const response = await dispatch(requestOtpThunk(screenState.mobile))

        if (response.meta.requestStatus == "fulfilled") {
            setScreen(loginFragments.validateOtp)
        }
    }, [])

    const onPressValidateOtp = useCallback(async () => {
        dispatch(validateOtpThunk({ mobile: screenState.mobile, otp: screenState.otp }))
    }, [])

    const onGoBack = useCallback(() => {
        setScreen(loginFragments.requestOtp)
    }, [currentScreen])

    return {
        currentScreen,
        loading,
        onPressSubmitOtp,
        onPressValidateOtp,
        onGoBack
    }
}

export default useLoginHook