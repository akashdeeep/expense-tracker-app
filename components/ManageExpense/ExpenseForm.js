import { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import Input from "./Input";
import Button from "../UI/Button";

export default ExpenseForm = (props) => {
	// console.log(props);
	const [inputs, setInputs] = useState({
		amount: {
			value: props.defaultValues ? props.defaultValues.amount.toString() : "",
			isValid: true,
		},
		date: {
			value: props.defaultValues ? props.defaultValues.date.toISOString() : "",
			isValid: true,
		},
		description: {
			value: props.defaultValues ? props.defaultValues.description : "",
			isValid: true,
		},
	});

	const [isFocused, setIsFocused] = useState({
		amount: false,
		date: false,
		description: false,
	});

	const [isBlurred, setIsBlurred] = useState({
		amount: false,
		date: false,
		description: false,
	});

	const [isTouched, setIsTouched] = useState({
		amount: false,
		date: false,
		description: false,
	});

	const inputChangeHandler = (inputIdentifier, inputValue) => {
		setInputs((prevState) => ({
			...prevState,
			[inputIdentifier]: {
				value: inputValue,
				isValid: inputValue.trim().length > 0,
			},
		}));
	};

	const submitHandler = () => {
		const expenseData = {
			amount: parseFloat(inputs.amount.value),
			date: new Date(inputs.date.value),
			description: inputs.description.value,
		};

		const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
		const isDateValid = !isNaN(expenseData.date.getTime());
		const isDescriptionValid = expenseData.description.trim().length > 0;

		if (!isAmountValid || !isDateValid || !isDescriptionValid) {
			setInputs((prevState) => ({
				...prevState,
				amount: {
					...prevState.amount,
					isValid: isAmountValid,
				},
				date: {
					...prevState.date,
					isValid: isDateValid,
				},
				description: {
					...prevState.description,
					isValid: isDescriptionValid,
				},
			}));
			return;
		}

		props.onSubmit(expenseData);
	};

	const formIsInvalid =
		!inputs.amount.isValid ||
		!inputs.date.isValid ||
		!inputs.description.isValid;

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Add Expense</Text>
			<View style={styles.inputRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					invalid={!inputs.amount.isValid}
					textInputConfig={{
						value: inputs.amount.value,
						onChangeText: inputChangeHandler.bind(this, "amount"),
						keyboardType: "decimal-pad",
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					invalid={!inputs.date.isValid}
					textInputConfig={{
						value: inputs.date.value,
						onChangeText: inputChangeHandler.bind(this, "date"),
						placeholder: "YYYY-MM-DD",
						maxLength: 10,
					}}
				/>
			</View>
			<View style={styles.inputRow}>
				<Input
					style={styles.rowInput}
					label="Description"
					invalid={!inputs.description.isValid}
					textInputConfig={{
						value: inputs.description.value,
						onChangeText: inputChangeHandler.bind(this, "description"),
						multiline: true,
						numberOfLines: 4,
					}}
				/>
			</View>
			{formIsInvalid && (
				<Text style={styles.errorText}>Please enter valid values</Text>
			)}
			<View style={styles.buttonContainer}>
				<Button style={styles.button} mode="flat" onPress={props.onCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={submitHandler}>
					{props.submitButtonLabel}
				</Button>
			</View>
		</View>
	);
};

styles = StyleSheet.create({
	form: {
		marginTop: 40,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: GlobalStyles.colors.primary50,
		marginBottom: 10,
		paddingHorizontal: 20,
		textAlign: "center",
		marginVertical: 10,
	},
	inputRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	rowInput: {
		flex: 1,
		marginHorizontal: 10,
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
	errorText: {
		color: GlobalStyles.colors.error600,
		textAlign: "center",
		margin: 10,
	},
});
