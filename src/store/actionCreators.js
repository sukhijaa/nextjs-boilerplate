export const actionTypeCreator = action => ({
  REQUEST: `${action}_REQUEST`,
  LOADING: `${action}_LOADING`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
  RESET: `${action}_RESET`
});

export const actionCreator = actionType => ({
  Request: reqData => ({ payload: reqData, type: actionType.REQUEST }),
  Loading: () => ({ type: actionType.LOADING }),
  Success: resData => ({ payload: resData, type: actionType.SUCCESS }),
  Failure: error => ({ error, type: actionType.FAILURE }),
  Reset: () => ({ type: actionType.RESET })
});
