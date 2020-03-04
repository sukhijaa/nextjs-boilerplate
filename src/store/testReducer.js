import { GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS, GET_SYNC_REDUX_PROP_TYPE } from '../utils/constants';

const initialState = {};

function testReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SYNC_REDUX_PROP_TYPE:
      return {...state, syncReduxProp: action.data};
    case GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS:
      return {...state, asyncReduxSagaProp: action.data};
    default:
      return state
  }
}

export default testReducer
