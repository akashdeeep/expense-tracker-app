import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default ErrorOverlay = (props) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>Error</Text>
			<Text style={styles.message}>{props.error}</Text>
			<Button onPress={props.onRetry}>Retry</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: GlobalStyles.colors.primary800,
	},
	text: {
		color: GlobalStyles.colors.primary50,
		textAlign: "center",
		marginBottom: 10,
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
		fontWeight: "bold",
	},
	message: {
		fontSize: 16,
		marginVertical: 10,
	},
});
