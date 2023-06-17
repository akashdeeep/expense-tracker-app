import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/GlobalStyles";

export default ManageExpenses = (props) => {
	const editedExpenseId = props.route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	useLayoutEffect(() => {
		props.navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [props.navigation, isEditing]);

	return (
		<View style={styles.container}>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						name="trash-outline"
						size={30}
						color={GlobalStyles.colors.error400}
						onPress={() => {
							props.navigation.navigate("AllExpenses");
						}}
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
