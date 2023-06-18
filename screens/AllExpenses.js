import { Text, View } from "react-native";
import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default AllExpenses = (props) => {
	const expensesCtx = useContext(ExpensesContext);

	return (
		<ExpensesOutput
			expensePeriod="All"
			expenses={expensesCtx.expenses}
			fallbackText="No expenses registered"
		/>
	);
};
