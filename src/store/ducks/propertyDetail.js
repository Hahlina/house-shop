import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';

import { EMPTY_ARRAY } from 'common/constants';
import { fetchPropertyDetail } from 'common/api';

export const GET_PROPERTY_DETAIL = 'propertyDetail/getProperty';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const propertiesSlice = createSlice({
    name: 'propertyDetail',
    initialState,
    reducers: {
        getProperty: (state) => {
            state.loading = true;
            state.data = EMPTY_ARRAY;
        },
        getPropertySuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getPropertyError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export function* getPropertyDetailWorker(action) {
    const propertyID = action.payload;

    try {
        const property = yield call(() => fetchPropertyDetail(propertyID));
        yield put(getPropertySuccess(property));
    } catch (error) {
        yield put(getPropertyError(error.message));
    }
}

export function* getPropertyDetailWatcher() {
    yield takeLeading(GET_PROPERTY_DETAIL, getPropertyDetailWorker);
}

export const { getProperty, getPropertyError, getPropertySuccess } = propertiesSlice.actions;
export default propertiesSlice.reducer;
