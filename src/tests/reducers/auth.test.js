import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const uid = '12345';
  const action = {
    type: 'LOGIN',
    uid,
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe(uid);
});

test('should clear auth state on logout', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: '12345' }, action);
  expect(state).toEqual({});
});
