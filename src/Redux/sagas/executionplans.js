import { takeEvery, put,call} from 'redux-saga/effects';
import axios from 'axios';


export  function* rootSaga(){
    yield takeEvery("REVIEW_ACTION",HandleCourse);
}

function getCaller(url){
    return axios.get(url);
}

function* HandleCourse(){
    
    let response=yield call(getCaller,"http://206.221.177.87:8894/rest-api/reviews");
    console.log(response);
    yield put({type:'REVIEW_DATA',data:response.data});
 }
