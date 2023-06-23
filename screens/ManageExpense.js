import { View, Text, StyleSheet, TextInput } from "react-native";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/GlobalStyles";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default ManageExpenses = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const editedExpenseId = props.route.params?.expenseId;
	const isEditing = !!editedExpenseId;
	const expensesCtx = useContext(ExpensesContext);

	const selectedExpense = expensesCtx.expenses.find(
		(expense) => expense.id === editedExpenseId
	);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [props.navigation, isEditing]);

	cancelHandler = () => {
		console.log("Cancel");
		props.navigation.goBack();
	};
	async function confirmHandler(expenseData) {
		setIsLoading(true);
		try {
			if (isEditing) {
				expensesCtx.updateExpense(editedExpenseId, expenseData);
				await updateExpense(editedExpenseId, expenseData);
			} else {
				const id = await storeExpense(expenseData);
				expensesCtx.addExpense({
					id: id,
					...expenseData,
				});
			}
			props.navigation.goBack();
		} catch (error) {
			setError("Could not save expense");
			setIsLoading(false);
		}
	}

	async function deleteHandler() {
		setIsLoading(true);
		try {
			await deleteExpense(editedExpenseId);

			expensesCtx.deleteExpense(editedExpenseId);
			props.navigation.goBack();
		} catch (error) {
			setError("Could not delete expense");
			setIsLoading(false);
		}
	}

	errorHandler = () => {
		setError(null);
	};
	if (error && !isLoading) {
		return <ErrorOverlay error={error} onRetry={errorHandler} />;
	}
	if (isLoading) {
		return <LoadingOverlay />;
	}

	return (
		<View style={styles.container}>
			<ExpenseForm
				onCancel={cancelHandler}
				onSubmit={confirmHandler}
				submitButtonLabel={isEditing ? "Update" : "Add"}
				defaultValues={isEditing ? selectedExpense : null}
			/>

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
});
