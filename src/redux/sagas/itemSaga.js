import { call, put, takeEvery } from 'redux-saga/effects';

async function getItems() {
    try {
        const data = await fetch("data/age-of-empires-units.json")
            .then(response => response.json())
            .catch(error => console.log(error));

        return data.units
    }
    catch (e) {
        console.log(e);
    }
}

function* fetchItems(action) {
    try {
        const items = yield call(getItems);
        yield put({ type: 'GET_ITEMS_SUCCESS', items: items });
    } catch (e) {
        yield put({ type: 'GET_ITEMS_FAILED', message: e.message });
    }
}

function* itemSaga() {
    yield takeEvery('GET_ITEMS_REQUESTED', fetchItems);
}

export default itemSaga;