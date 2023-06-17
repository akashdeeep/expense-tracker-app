import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/GlobalStyles";

export default ManageExpenses = (props) => {
	const editedExpenseId = props.route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [props.navigation, isEditing]);

	cancelHandler = () => {
		props.navigation.goBack();
	};
	confirmHandler = () => {
		props.navigation.goBack();
	};
	deleteHandler = () => {
		props.navigation.goBack();
	};

	return (
		<View style={styles.container}>
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
