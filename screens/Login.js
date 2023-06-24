import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../styles/GlobalStyles";

export default function Login() {
	const navigation = useNavigation();

	return (
		<View>
			<Text>Login Screen</Text>
			<Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GlobalStyles.primary50,
		alignItems: "center",
		justifyContent: "center",
	},
});
