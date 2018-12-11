import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (updates) => {
    this.props.editExpense(this.props.expense.id, updates);
    this.props.history.push('/');
  };
  
  onRemove = () => {
    this.props.removeExpense(this.props.expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>
          Remove
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: (expense) => dispatch(removeExpense(expense)),
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
