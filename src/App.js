import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginView from "./Components/LoginView";
// import sendToFirebase from "./sendToFirebase";
import RegisterView from "./Components/RegisterView";
// import { PageContainer } from "./Components/PageContainer";
import { routerPaths } from "./helpers/routerPaths";
import AddExpenseIncome from "./Components/AddExpenseIncome";

function App() {
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
            <PageContainer/>
          </Route>
          <Route exact path="/add">
            <AddExpenseIncome />
          </Route>
          <h1>No such page 😭</h1>
        </Switch>
        {/* Temporary links to pages under constraction: */}
        {/* <Link to={routerPaths.login}>Login</Link>
        <Link to={routerPaths.register}>Register</Link>
        <Link to={routerPaths.dashboard}>Dashboard</Link>
        <button onClick={sendToFirebase}>Send</button> */}
    </BrowserRouter>
  );
}

export default App;
