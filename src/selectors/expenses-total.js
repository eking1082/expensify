const selectExpensesTotal = (expenses) => {
  return expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
};

export default selectExpensesTotal;
