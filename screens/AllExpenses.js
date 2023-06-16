import { Text, View } from "react-native";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default AllExpenses = (props) => {
	return <ExpensesOutput periodName="All" expenses={props.expenses} />;
};
