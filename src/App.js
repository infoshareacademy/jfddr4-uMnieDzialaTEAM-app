import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import LoginView from "./Components/LoginView";
import RegisterView from "./Components/RegisterView";
import { PageContainer } from "./Components/PageContainer";
import { routerPaths } from "./helpers/routerPaths";
import { useCurrentUser } from "./helpers/hooks";
import { useEffect, useState, useMemo } from "react";
import DonutChart from "./Components/Chart";
import { db } from "./firebaseConfig";
import { query, collection, where } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { subMonths, format } from "date-fns";
import ApexChart from "./Components/ChartYear";
import { TransactionsContainer } from "./Components/TransactionsContainer";
import styled from "styled-components";

const Transaction = styled.div`
	width: 100%;
	left: 399px;
	top: 658px;
	background: rgba(255, 255, 255, 0.06);
	border-radius: 10px;
`;

function App() {
	const currentUser = useCurrentUser();
	const [transactions, setTransactions] = useState([]);
	const [dMonths, setDMonths] = useState(0);

	let date = useMemo(() => new Date(), []);

	let firstDay = useMemo(
		() => new Date(date.getFullYear(), date.getMonth(), 1),
		[date]
	);

	let lastDay = useMemo(
		() => new Date(date.getFullYear(), date.getMonth() + 1, 1),
		[date]
	);

	const monthLabel = format(subMonths(firstDay, dMonths), "MMMM");

	console.log(subMonths(firstDay, dMonths));

	useEffect(() => {
		if (!currentUser) {
			return;
		}

		onSnapshot(
			query(
				collection(db, "users", currentUser.uid, "transactions"),
				where("date", ">", subMonths(firstDay, dMonths)),
				where("date", "<", subMonths(lastDay, dMonths))
			),
			(querySnapshot) => {
				const transactions = [];
				querySnapshot.forEach((doc) => {
					transactions.push({
						...doc.data(),
						key: doc.id,
					});
				});
				setTransactions(transactions);
			}
		);
	}, [currentUser, dMonths, firstDay, lastDay]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={routerPaths.login}>
					<LoginView />
				</Route>

				<Route exact path={routerPaths.register}>
					<RegisterView />
				</Route>

				<Route exact path={routerPaths.home}>
					{currentUser === null ? (
						<Redirect to={routerPaths.noAccess} />
					) : (
						<PageContainer>
							<DonutChart transactions={transactions} />
							<Transaction>
								<TransactionsContainer
									transactions={transactions}
									setDMonths={setDMonths}
									month={monthLabel}
								/>
							</Transaction>
						</PageContainer>
					)}
				</Route>
				<Route exact path="/chart">
					<DonutChart />
				</Route>
				<Route exact path={routerPaths.noAccess}>
					<h1>No access!</h1>
				</Route>
				<Route exact path={routerPaths.trends}>
					<PageContainer>
						<ApexChart></ApexChart>
					</PageContainer>
				</Route>
				<Route>
					<h1>No such page 😭</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
