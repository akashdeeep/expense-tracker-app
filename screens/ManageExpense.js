import { View, Text } from "react-native";
import { useLayoutEffect } from "react";

export default ManageExpenses = (props) => {
	const editedExpenseId = props.route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [props.navigation, isEditing]);

	return <Text>Manage Expenses</Text>;
};
