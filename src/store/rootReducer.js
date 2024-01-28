import { combineReducers } from '@reduxjs/toolkit';

import properties from 'store/ducks/properties';
import propertyDetail from 'store/ducks/propertyDetail';

export const rootReducer = combineReducers({
    properties,
    propertyDetail
});
