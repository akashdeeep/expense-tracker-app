import { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

function Input(props) {
	let inputStyles = [styles.input];
	if (props.textInputConfig && props.textInputConfig.multiline) {
		inputStyles.push(styles.multilineInput);
	}
	console.log(props.style, styles2);
	return (
		<View style={[styles2.inputContainer, props.style]}>
			<Text style={styles2.label}>{props.label}</Text>
			<TextInput style={styles2.input} {...props.textInputConfig} />
		</View>
	);
}

export default Input;

styles2 = StyleSheet.create({
	inputContainer: {
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		color: GlobalStyles.colors.primary50,
		marginBottom: 5,
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: GlobalStyles.colors.primary50,
		paddingVertical: 5,
		paddingHorizontal: 2,
		fontSize: 16,
		color: GlobalStyles.colors.primary50,
		backgroundColor: GlobalStyles.colors.primary900,
	},
	multilineInput: {
		height: 100,
	},
});
