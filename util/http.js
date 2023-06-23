import axios from "axios";

storeExpense = (expenseData) => {
	return axios.post(
		"https://expense-tracker-fd2ec-default-rtdb.firebaseio.com/expenses.json",
		expenseData
	);
};

export default storeExpense;
