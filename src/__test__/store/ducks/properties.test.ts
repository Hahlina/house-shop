import { call } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';
import { expectSaga, testSaga } from 'redux-saga-test-plan';

import {
    selectProperties,
    getProperties,
    getPropertiesSuccess,
    getPropertiesError,
    propertiesInitialState,
    getPropertiesWorker
} from 'store/ducks';
import propertiesReducer from 'store/ducks/properties';
import { mockProperties, mockReduxStore } from 'common/utils/test';
import { fetchProperties } from 'common/api';

describe('Properties slice', () => {
    const { properties } = mockReduxStore;

    it('should handle getProperties', () => {
        const nextState = propertiesReducer(propertiesInitialState, getProperties());
        expect(nextState.loading).toEqual(true);
    });

    it('should handle getPropertiesSuccess', () => {
        const nextState = propertiesReducer(propertiesInitialState, getPropertiesSuccess(properties.data));
        expect(nextState.loading).toEqual(false);
        expect(nextState.data).toEqual(properties.data);
    });

    it('should handle getPropertiesError', () => {
        const errorMessage = 'Something went wrong';
        const nextState = propertiesReducer(propertiesInitialState, getPropertiesError(errorMessage));
        expect(nextState.loading).toEqual(false);
        expect(nextState.error).toEqual(errorMessage);
    });

    it('should select properties from the store', () => {
        expect(selectProperties(mockReduxStore)).toEqual(properties);
    });
});

describe('Saga getPropertiesWorker', () => {
    it('should have exact order with redux-saga-test-plan', async () => {
        testSaga(getPropertiesWorker)
            .next()
            .call(fetchProperties)
            .next(mockProperties)
            .put(getPropertiesSuccess(mockProperties))
            .next()
            .isDone();
    });

    it('should handle errors with redux-saga-test-plan', async () => {
        const error = new Error('Failed to fetch properties');
        await expectSaga(getPropertiesWorker)
            .provide([[call(fetchProperties), throwError(error)]])
            .put(getPropertiesError(error.message))
            .run();
    });

    it('should fetch the property list', async () => {
        await expectSaga(getPropertiesWorker)
            .provide([[call(fetchProperties), mockProperties]])
            .put(getPropertiesSuccess(mockProperties))
            .run();
    });

    it('should handle a successful fetch', async () => {
        await expectSaga(getPropertiesWorker)
            .provide([[call(fetchProperties), mockProperties]])
            .put(getPropertiesSuccess(mockProperties))
            .run();
    });
});
