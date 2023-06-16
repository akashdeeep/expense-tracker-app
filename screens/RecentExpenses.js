import { View, Text } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default RecentExpenses = (props) => {
	return (
		<ExpensesOutput expensePeriod="Last 7 Days" expenses={props.expenses} />
	);
};
