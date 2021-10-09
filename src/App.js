import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import LoginView from "./Components/LoginView";
import RegisterView from "./Components/RegisterView";
import { PageContainer } from "./Components/PageContainer";
import { routerPaths } from "./helpers/routerPaths";
import { useCurrentUser } from "./helpers/hooks";
import { useEffect, useState } from "react";
import DonutChart from "./Components/Chart";
import { db } from "./firebaseConfig";
import { query, collection, where } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

function App() {
  const currentUser = useCurrentUser();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log("[App] currentUser: ", currentUser);
  });

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    onSnapshot(
      query(
        collection(db, "cities", currentUser.uid, "transactions"),
        where("date", ">", new Date("2021-10-09"))
      ),
      (querySnapshot) => {
        const transactions = [];
        console.log("hej");
        querySnapshot.forEach((doc) => {
          transactions.push({
            ...doc.data(),
            key: doc.id,
          });
          console.log("transakcje", transactions);
        });
        setTransactions(transactions);
      }
    );
  }, [currentUser]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routerPaths.login}>
          <LoginView />
        </Route>

        <Route exact path={routerPaths.register}>
          <RegisterView />
        </Route>

        <Route exact path={routerPaths.dashboard}>
          {currentUser === null ? (
            <Redirect to={routerPaths.noAccess} />
          ) : (
            <PageContainer transactions={transactions} />
          )}
        </Route>
        <Route exact path="/chart">
          <DonutChart />
        </Route>
        <Route exact path={routerPaths.noAccess}>
          <h1>No access!</h1>
        </Route>
        <h1>No such page 😭</h1>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
