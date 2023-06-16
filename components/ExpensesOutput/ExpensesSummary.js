import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default ExpensesSummary = (props) => {
	const expenseSum = props.expenses.reduce((sum, expense) => {
		return sum + expense.amount;
	}, 0);
	return (
		<View style={styles.container}>
			<Text style={styles.period}>{props.periodName}</Text>
			<Text style={styles.sum}>₹{expenseSum.toFixed(2)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		padding: 10,
		backgroundColor: GlobalStyles.colors.neutral50,
		borderRadius: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	period: {
		fontSize: 15,
		color: GlobalStyles.colors.neutral700,
	},
	sum: {
		fontSize: 18,
		color: GlobalStyles.colors.neutral700,
		fontWeight: "bold",
	},
});
