import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default LoadingOverlay = (props) => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={GlobalStyles.colors.primary50} />
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
});
