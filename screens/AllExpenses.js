import { Text, View } from "react-native";

import ExpensesOutput from "../constants/ExpensesOutput/ExpensesOutput";

export default AllExpenses = (props) => {
	return <ExpensesOutput periodName="All" expenses={props.expenses} />;
};
