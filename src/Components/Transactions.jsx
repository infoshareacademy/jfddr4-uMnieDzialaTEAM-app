import { db } from "../firebaseConfig";
import {
	collection,
	query,
	onSnapshot,
	getDocs,
	collectionGroup,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export function TransactionsView() {
	const [usersData, setUsersData] = useState([]);
	const [transactions, setTransactions] = useState([]);
	const q = query(collection(db, "users"));
	const fetchDb = async () => {
		const usersData = await getDocs(collection(db, "users"));
		const transactions = await getDocs(collectionGroup(db, "transactions2"));

		const usersState = [];
		const transactionsState = [];
		usersData.forEach((doc) => {
			console.log(`${doc.id}`, doc.data());
			usersState.push({ ...doc.data(), id: doc.id });
		});

		setUsersData(usersState);

		transactions.forEach((doc) => {
			console.log(`${doc.id}`, doc.data());
			transactionsState.push(doc.data());
		});

		setTransactions(transactionsState);
	};

	useEffect(() => {
		fetchDb();
	}, []);

	return (
		<div>
			{usersData.map((data) => {
				return (
					<div key={data.id}>
						<p>{data.id}</p>
					</div>
				);
			})}
			<ul>
				{transactions.map((data, i) => {
					return (
						<li key={i}>
							<p>{data.currency}</p>
							<p>{data.value}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
