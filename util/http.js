import axios from "axios";

const BACKEND_URL = "https://expense-tracker-fd2ec-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
	return axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function fetchExpenses() {
	const response = await axios.get(BACKEND_URL + "/expenses.json");
	console.log(response);
	const expenses = [];
	for (const key in response.data) {
		expenses.push({
			id: key,
			amount: response.data[key].amount,
			date: new Date(response.data[key].date),
			description: response.data[key].description,
		});
	}
	console.log(expenses);
	return expenses;
}
