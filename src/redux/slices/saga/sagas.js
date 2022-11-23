/** @format */

import { call, put, all, takeEvery } from 'redux-saga/effects';
import { getAllUser } from '../userSlice';
import { sagaActions } from './sagaActions';

const usersFetch = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => {
      return res.json();
    },
  );
  return res;
};

function* workGetUserFetch() {
  const users = yield call(usersFetch);
  yield put(getAllUser(users));
}
function* mySaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, workGetUserFetch);
}
export default mySaga;
