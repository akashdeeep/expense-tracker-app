import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
	// {
	// 	id: "e1",
	// 	description: "Toilet Paper",
	// 	amount: 94.12,
	// 	date: new Date(2020, 7, 14),
	// },
	// {
	// 	id: "e2",
	// 	description: "New TV",
	// 	amount: 799.49,
	// 	date: new Date(2021, 2, 12),
	// },
	// {
	// 	id: "e3",
	// 	description: "Car Insurance",
	// 	amount: 294.67,
	// 	date: new Date(2023, 6, 11),
	// },
	// {
	// 	id: "e4",
	// 	description: "New Desk (Wooden)",
	// 	amount: 450,
	// 	date: new Date(2023, 6, 12),
	// },
	// {
	// 	id: "e5",
	// 	description: "Toilet Paper",
	// 	amount: 94.12,
	// 	date: new Date(2020, 7, 14),
	// },
	// {
	// 	id: "e6",
	// 	description: "New TV",
	// 	amount: 799.49,
	// 	date: new Date(2021, 2, 12),
	// },
	// {
	// 	id: "e8",
	// 	description: "Car Insurance",
	// 	amount: 294.67,
	// 	date: new Date(2023, 6, 11),
	// },
	// {
	// 	id: "e9",
	// 	description: "New Desk (Wooden)",
	// 	amount: 450,
	// 	date: new Date(2023, 6, 12),
	// },
];

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: (expense) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, expense) => {},
});

expensesReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			const id = new Date().getTime().toString() + Math.random().toString();
			const newExpense = {
				id,
				description: action.expense.description,
				amount: action.expense.amount,
				date: action.expense.date,
			};
			return [...state, newExpense];

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
	const [expenses, dispatchExpenses] = useReducer(
		expensesReducer,
		DUMMY_EXPENSES
	);

	const addExpense = (expense) => {
		dispatchExpenses({ type: "ADD", expense });
	};

	const deleteExpense = (id) => {
		dispatchExpenses({ type: "DELETE", id });
	};

	const updateExpense = (id, expense) => {
		dispatchExpenses({ type: "UPDATE", id, expense });
	};

	const value = {
		expenses,
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
