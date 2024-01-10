import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react'

function submitBooking(): Promise<any> {   // simulating the API response to confirm a booking
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: true,
                error: null
            })
        }, 1500)
    })
}

export const sumbitBookingThunk = createAsyncThunk(
    "/sumbitBookingThunk",
    async (_, thunkAPI) => {
        try {
            const response = await submitBooking()   //simulating an api call for requesting the otp

            const data = await response.json()
            return data
        } catch (error: any) {
            thunkAPI.rejectWithValue(error)
        }
    }
);