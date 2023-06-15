import { View, Text } from "react-native";

import ExpensesOutput from "../constants/ExpensesOutput/ExpensesOutput";

export default RecentExpenses = (props) => {
	return <ExpensesOutput periodName="7Days" expenses={props.expenses} />;
};
