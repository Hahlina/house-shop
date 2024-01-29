import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';

import { fetchPropertyDetail } from 'common/api';
import type { RootState } from 'store/appStore';
import type { IPropertyDetail } from 'common/types';

export const GET_PROPERTY_DETAIL = 'propertyDetail/getProperty';

interface IPropertyDetailState {
    data: IPropertyDetail;
    loading: boolean;
    error: null | string;
}

const initialState: IPropertyDetailState = {
    data: {
        id: null,
        title: null,
        price: null,
        address: null,
        preview_image: null,
        photos: null,
        description: null,
        seller: null
    },
    loading: false,
    error: null
};

const propertyDetailSlice = createSlice({
    name: 'propertyDetail',
    initialState,
    reducers: {
        getProperty: (state, payload: PayloadAction<string>) => {
            state.loading = true;
        },
        getPropertySuccess: (state, action: PayloadAction<IPropertyDetail>) => {
            state.loading = false;
            state.data = action.payload;
        },
        getPropertyError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export function* getPropertyDetailWorker(action: PayloadAction<string>) {
    const propertyID = action.payload;

    try {
        const property: IPropertyDetail = yield call(() => fetchPropertyDetail(propertyID));
        yield put(getPropertySuccess(property));
    } catch (error) {
        if (error instanceof Error) yield put(getPropertyError(error.message));
    }
}

export function* getPropertyDetailWatcher() {
    yield takeLeading(GET_PROPERTY_DETAIL, getPropertyDetailWorker);
}

export const selectPropertyDetail = (state: RootState) => state.propertyDetail;
export const { getProperty, getPropertyError, getPropertySuccess } = propertyDetailSlice.actions;
export default propertyDetailSlice.reducer;
