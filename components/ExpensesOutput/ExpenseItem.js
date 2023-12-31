import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

export default ExpenseItem = (props) => {
	const navigation = useNavigation();
	expensePressedHandler = () => {
		navigation.navigate("ManageExpense", {
			expenseId: props.id,
			expenseDescription: props.description,
			expenseAmount: props.amount,
			expenseDate: props.date, // gives warning of non-serializable value
		});
		console.log(props.date);
	};

	return (
		<Pressable
			onPress={expensePressedHandler}
			style={({ pressed }) => pressed && styles.pressed}
			android_ripple={{
				color: GlobalStyles.colors.neutral700,
				borderless: false,
			}}>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.textBase, styles.description]}>
						{props.description}
					</Text>
					<Text style={styles.textBase}>{getFormattedDate(props.date)}</Text>
				</View>
				<View style={styles.amountContainer}>
					<Text style={styles.amount}>₹{props.amount.toFixed(2)}</Text>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.5,
	},
	expenseItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: GlobalStyles.colors.neutral50,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 10,
		elevation: 5,
		shodowColor: GlobalStyles.colors.neutral700,
		shadowRadius: 10,
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 2 },
	},
	textBase: {
		color: GlobalStyles.colors.neutral700,
	},
	description: {
		fontSize: 15,
		marginBottom: 5,
		fontWeight: "bold",
	},
	amountContainer: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		backgroundColor: GlobalStyles.colors.primary100,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		minWidth: 100,
	},
	amount: {
		color: GlobalStyles.colors.primary900,
		fontSize: 18,
		fontWeight: "bold",
	},
});
