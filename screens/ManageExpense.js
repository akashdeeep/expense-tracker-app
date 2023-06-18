import { View, Text, StyleSheet, TextInput } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/GlobalStyles";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default ManageExpenses = (props) => {
	const editedExpenseId = props.route.params?.expenseId;
	const isEditing = !!editedExpenseId;
	const expensesCtx = useContext(ExpensesContext);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [props.navigation, isEditing]);

	cancelHandler = () => {
		props.navigation.goBack();
	};
	confirmHandler = () => {
		if (isEditing) {
			expensesCtx.updateExpense(editedExpenseId, {
				description: "Test",
				amount: 12.99,
				date: new Date(),
			});
		} else {
			expensesCtx.addExpense({
				id: new Date().toString() + Math.random(),
				description: "Test",
				amount: 12.99,
				date: new Date(),
			});
		}
		props.navigation.goBack();
	};
	deleteHandler = () => {
		expensesCtx.deleteExpense(editedExpenseId);
		props.navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<ExpenseForm />
			<View style={styles.buttonContainer}>
				<Button style={styles.button} mode="flat" onPress={cancelHandler}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={confirmHandler}>
					{isEditing ? "Update" : "Add"}
				</Button>
			</View>

			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						name="trash-outline"
						size={30}
						color={GlobalStyles.colors.error400}
						onPress={deleteHandler}
					/>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: GlobalStyles.colors.primary800,
	},
	deleteContainer: {
		marginTop: 10,
		paddingTop: 10,
		borderTopWidth: 1,
		borderTopColor: GlobalStyles.colors.primary50,
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 100,
		marginHorizontal: 10,
	},
});
