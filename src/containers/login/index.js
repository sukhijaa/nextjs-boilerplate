import reducer from './reducer';
import saga from './saga';
import {REDUCER_STORE_KEY} from './constants';

const key = REDUCER_STORE_KEY;

export default {reducer, saga, key};
