import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import LoginView from "./Components/LoginView";
// import sendToFirebase from "./sendToFirebase";
import RegisterView from "./Components/RegisterView";
import { PageContainer } from "./Components/PageContainer";
import { routerPaths } from "./helpers/routerPaths";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <PageContainer>
        <Switch>
          <Route exact path={routerPaths.login}>
            <LoginView />
          </Route>
          <Route exact path={routerPaths.register}>
            <RegisterView />
          </Route>
          <Route exact path={routerPaths.dashboard}>
            <h1>Welcome to Dashboard Page! 🎊</h1>
          </Route>
          <h1>No such page 😭</h1>
        </Switch>
        {/* Temporary links to pages under constraction: */}
        {/* <Link to={routerPaths.login}>Login</Link>
        <Link to={routerPaths.register}>Register</Link>
        <Link to={routerPaths.dashboard}>Dashboard</Link>
        <button onClick={sendToFirebase}>Send</button> */}
      </PageContainer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
