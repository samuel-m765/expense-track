function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;