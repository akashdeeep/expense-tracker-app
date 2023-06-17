import { View, Text } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default RecentExpenses = (props) => {
	const expensesCtx = useContext(ExpensesContext);

	const RecentExpenses = expensesCtx.expenses.filter((expense) => {
		const expenseDate = new Date(expense.date);
		const today = new Date();
		const daysAgo = new Date(today.setDate(today.getDate() - 7));
		return expenseDate >= daysAgo;
	});

	return (
		<ExpensesOutput expensePeriod="Last 7 Days" expenses={RecentExpenses} />
	);
};
