import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';

import { fetchProperties } from 'common/api';

export const GET_PROPERTIES = 'properties/getProperties';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        getProperties: (state) => {
            state.loading = true;
        },
        getPropertiesSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getPropertiesError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export function* getPropertiesWorker() {
    try {
        const properties = yield call(fetchProperties);
        yield put(getPropertiesSuccess(properties));
    } catch (error) {
        yield put(getPropertiesError(error.message));
    }
}

export function* getPropertiesWatcher() {
    yield takeLeading(GET_PROPERTIES, getPropertiesWorker);
}

export const { getProperties, getPropertiesError, getPropertiesSuccess } = propertiesSlice.actions;
export default propertiesSlice.reducer;
