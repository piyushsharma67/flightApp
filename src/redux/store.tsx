import { AnyAction, Reducer, ThunkDispatch, combineReducers, configureStore } from '@reduxjs/toolkit'
import loginSlice from '../screens/authentication/login/redux/slice/login.slice'
import { useDispatch } from 'react-redux';
import flightsListSlice from '../screens/authenticated/flightsList/redux/slice/flightsList.slice';
import bookFlightSlice from '../screens/authenticated/bookFlight/redux/slice/bookFlight.slice';

const reducers = combineReducers({
    login: loginSlice,
    flightsList: flightsListSlice,
    bookFlight: bookFlightSlice
})

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === 'logout') {
        state = {} as RootState;
    }
    return reducers(state, action);
};

export const store = configureStore({
    reducer: rootReducer
}
);