import { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default Input = (props) => {
	return (
		<View style={[styles.inputContainer, props.style]}>
			<Text style={styles.label}> {props.label}</Text>
			<TextInput style={styles.input} {...props.textInputConfig} />
		</View>
	);
};

styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 10,
		marginHorizontal: 20,
	},
	label: {
		fontSize: 18,
		marginBottom: 5,
		color: GlobalStyles.colors.primary50,
	},
	input: {
		borderBottomColor: GlobalStyles.colors.primary50,
		borderBottomWidth: 1,
		paddingVertical: 2,
		paddingHorizontal: 5,
		color: GlobalStyles.colors.primary50,
		backgroundColor: GlobalStyles.colors.primary900,
	},
});
