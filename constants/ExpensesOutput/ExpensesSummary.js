import { View, Text } from "react-native";

export default ExpensesSummary = (props) => {
	const expenseSum = props.expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);
	return (
		<View>
			<Text>
				{props.periodName} Expenses: {expenseSum.toFixed(2)}
			</Text>
		</View>
	);
};
