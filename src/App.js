import "./App.css";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import LoginView from "./Components/LoginView";
import RegisterView from "./Components/RegisterView";
import { PageContainer } from "./PageContainer";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Switch>
          <Route exact path="/Login">
            <LoginView />
          </Route>
          <Route exact path="/register">
            <RegisterView />
          </Route>
          <Route exact path="/dashboard">
            <h1>Welcome to Dashboard Page! 🎊</h1>
          </Route>
          <h1>No such page 😭</h1>
        </Switch>
        {/* Temporary links to pages under constraction: */}
        <Link to="/Login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
