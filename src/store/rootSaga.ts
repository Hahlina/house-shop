import { all } from 'redux-saga/effects';

import { getPropertiesWatcher, getPropertyDetailWatcher } from 'store/ducks';

export function* rootSaga() {
    yield all([getPropertiesWatcher(), getPropertyDetailWatcher()]);
}
