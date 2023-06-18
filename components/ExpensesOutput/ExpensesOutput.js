import { FlatList, View, Text, StyleSheet } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default ExpensesOutput = (props) => {
	let content = (
		<View style={styles.noExpenses}>
			<Text style={styles.text}>{props.fallbackText}</Text>
		</View>
	);

	if (props.expenses.length > 0) {
		content = <ExpensesList expenses={props.expenses} />;
	}

	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={props.expenses}
				periodName={props.expensePeriod}
			/>
			{content}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingHorizontal: 10,
		backgroundColor: GlobalStyles.colors.primary900,
		flex: 1,
	},
	noExpenses: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: GlobalStyles.colors.neutral700,
		fontSize: 18,
		fontWeight: "bold",
	},
});
