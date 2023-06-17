import { FlatList, View, Text, StyleSheet } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default ExpensesOutput = (props) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary
				expenses={props.expenses}
				periodName={props.expensePeriod}
			/>
			<ExpensesList expenses={props.expenses} />
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
});
