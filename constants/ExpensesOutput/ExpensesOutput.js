import { FlatList, View, Text } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		name: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		name: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		name: "Car Insurance",
		amount: 294.67,
		date: new Date(2023, 6, 11),
	},
	{
		id: "e4",
		name: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2023, 6, 12),
	},
];

export default ExpensesOutput = (props) => {
	return (
		<View>
			<ExpensesSummary
				expenses={DUMMY_EXPENSES}
				periodName={props.expensePeriod}
			/>
			<ExpensesList />
		</View>
	);
};
