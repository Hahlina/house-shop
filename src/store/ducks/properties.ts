import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';

import { fetchProperties } from 'common/api';
import type { RootState } from 'store';
import type { TPropertyList } from 'common/types';

export const GET_PROPERTIES = 'properties/getProperties';

interface IPropertiesSlice {
    data: TPropertyList;
    loading: boolean;
    error: null | string;
}

export const propertiesInitialState: IPropertiesSlice = {
    data: [],
    loading: false,
    error: null
};

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: propertiesInitialState,
    reducers: {
        getProperties: (state) => {
            state.loading = true;
        },
        getPropertiesSuccess: (state, action: PayloadAction<TPropertyList>) => {
            state.loading = false;
            state.data = action.payload;
        },
        getPropertiesError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export function* getPropertiesWorker() {
    try {
        const properties: TPropertyList = yield call(fetchProperties);
        yield put(getPropertiesSuccess(properties));
    } catch (error) {
        if (error instanceof Error) yield put(getPropertiesError(error.message));
    }
}

export function* getPropertiesWatcher() {
    yield takeLeading(GET_PROPERTIES, getPropertiesWorker);
}

export const selectProperties = (state: RootState) => state.properties;
export const { getProperties, getPropertiesError, getPropertiesSuccess } = propertiesSlice.actions;
export default propertiesSlice.reducer;
