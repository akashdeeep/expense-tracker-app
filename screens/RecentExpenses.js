import { View, Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { fetchExpenses } from "../util/http";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default RecentExpenses = (props) => {
	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		async function getExpenses() {
			const expenses = await fetchExpenses();
			expensesCtx.setExpenses(expenses);
		}
		getExpenses();
	}, []);

	const RecentExpenses = expensesCtx.expenses.filter((expense) => {
		const expenseDate = new Date(expense.date);
		const today = new Date();
		const daysAgo = new Date(today.setDate(today.getDate() - 7));
		return expenseDate >= daysAgo;
	});

	return (
		<ExpensesOutput
			expensePeriod="Last 7 Days"
			expenses={RecentExpenses}
			fallbackText="No expenses registered for the last 7 days"
		/>
	);
};
