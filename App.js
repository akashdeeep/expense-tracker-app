import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

ExpensesOverview = (props) => {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
			<BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
		</BottomTabs.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="ExpnesesOverview" component={ExpensesOverview} />
					<Stack.Screen name="ManageExpense" component={ManageExpense} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
