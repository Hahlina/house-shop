import {
    selectProperties,
    getProperties,
    getPropertiesSuccess,
    getPropertiesError,
    propertiesInitialState
} from 'store/ducks';
import propertiesReducer from 'store/ducks/properties';
import { mockReduxStore } from 'common/utils/test';

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
