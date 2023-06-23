import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: (expense) => {},
	setExpenses: (expenses) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, expense) => {},
});

expensesReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [action.expense, ...state];

		case "SET":
			const sortedByDateExpenses = action.expenses.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			});
			return sortedByDateExpenses;
		case "DELETE":
			return state.filter((expense) => expense.id !== action.id);

		case "UPDATE":
			const expenseIndex = state.findIndex(
				(expense) => expense.id === action.id
			);
			const updatedExpense = {
				id: action.id,
				description: action.expense.description,
				amount: action.expense.amount,
				date: action.expense.date,
			};
			const updatedExpenses = [...state];
			updatedExpenses[expenseIndex] = updatedExpense;
			return updatedExpenses;

		default:
			return state;
	}
};

export default ExpensesContextProvider = (props) => {
	const [expenses, dispatchExpenses] = useReducer(expensesReducer, []);

	const addExpense = (expense) => {
		dispatchExpenses({ type: "ADD", expense });
	};

	const setExpenses = (expenses) => {
		dispatchExpenses({ type: "SET", expenses });
	};

	const deleteExpense = (id) => {
		dispatchExpenses({ type: "DELETE", id });
	};

	const updateExpense = (id, expense) => {
		dispatchExpenses({ type: "UPDATE", id, expense });
	};

	const value = {
		expenses,
		setExpenses,
		addExpense,
		deleteExpense,
		updateExpense,
	};

	return (
		<ExpensesContext.Provider value={value}>
			{props.children}
		</ExpensesContext.Provider>
	);
};
