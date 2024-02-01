import { call } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';
import { expectSaga, testSaga } from 'redux-saga-test-plan';

import propertyDetailReducer, {
    getProperty,
    getPropertyError,
    getPropertySuccess,
    propertyDetailInitialState,
    selectPropertyDetail,
    getPropertyDetailWorker
} from 'store/ducks/propertyDetail';
import { mockPropertyDetail, mockReduxStore } from 'common/utils/test';
import { fetchPropertyDetail } from 'common/api';

describe('Property detail slice', () => {
    const { propertyDetail } = mockReduxStore;

    it('should handle getProperty', () => {
        const nextState = propertyDetailReducer(propertyDetailInitialState, getProperty(propertyDetail.data.id));
        expect(nextState.loading).toEqual(true);
    });

    it('should handle getPropertySuccess', () => {
        const nextState = propertyDetailReducer(propertyDetailInitialState, getPropertySuccess(propertyDetail.data));
        expect(nextState.loading).toEqual(false);
        expect(nextState.data).toEqual(propertyDetail.data);
    });

    it('should handle getPropertyError', () => {
        const errorMessage = 'Just Error';
        const nextState = propertyDetailReducer(propertyDetailInitialState, getPropertyError(errorMessage));
        expect(nextState.loading).toEqual(false);
        expect(nextState.error).toEqual(errorMessage);
    });

    it('should select propertyDetail from the store', () => {
        expect(selectPropertyDetail(mockReduxStore)).toEqual(propertyDetail);
    });
});

describe('Saga getPropertyDetailWorker', () => {
    const propertyId = mockPropertyDetail.id;

    it('should have exact order with redux-saga-test-plan', () => {
        testSaga(getPropertyDetailWorker, getProperty(propertyId))
            .next()
            .call(fetchPropertyDetail, propertyId)
            .next(mockPropertyDetail)
            .put(getPropertySuccess(mockPropertyDetail))
            .next()
            .isDone();
    });

    it('should fetch the property detail', async () => {
        await expectSaga(getPropertyDetailWorker, getProperty(propertyId))
            .provide([[call(fetchPropertyDetail, propertyId), mockPropertyDetail]])
            .put(getPropertySuccess(mockPropertyDetail))
            .run();
    });

    it('should handle errors with redux-saga-test-plan', async () => {
        const error = new Error('Failed to fetch properties');
        await expectSaga(getPropertyDetailWorker, getProperty(propertyId))
            .provide([[call(fetchPropertyDetail, propertyId), throwError(error)]])
            .put(getPropertyError(error.message))
            .run();
    });
});
