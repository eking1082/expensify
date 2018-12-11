import moment from 'moment';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('should generate set text filter action object with provided value', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent',
  });
});

test('should generate set text filter action object with default value', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'date',
  });
});

test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'amount',
  });
});
