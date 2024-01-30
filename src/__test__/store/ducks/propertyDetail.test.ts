import propertyDetailReducer, {
    getProperty,
    getPropertyError,
    getPropertySuccess,
    propertyDetailInitialState,
    selectPropertyDetail
} from 'store/ducks/propertyDetail';
import { mockReduxStore } from 'common/utils/test';

describe('Property detail slice', () => {
    const { propertyDetail } = mockReduxStore;

    it('should handle getProperty', () => {
        const nextState = propertyDetailReducer(propertyDetailInitialState, getProperty('1'));
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
