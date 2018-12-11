import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    id: '123abc',
    type: 'REMOVE_EXPENSE',
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense('123abc', { note: 'Test note' });
  expect(action).toEqual({
    id: '123abc',
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'Test note',
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expense = {
    description: 'Rent',
    amount: 11273,
    createdAt: 1000,
    note: 'This was last months rent',
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
