import useLoginHook from "./useLoginHook";
import { renderHook } from '@testing-library/react-native'

describe('useLoginHook', () => {
    test('test mobile', () => {
        const { result } = renderHook(useLoginHook)

        result.current.
    })
})