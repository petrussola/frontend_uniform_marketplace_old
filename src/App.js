import React from "react";
import { Switch, Route } from "react-router-dom";

// context
import { AuthProvider } from "./context/AuthContext";

// components
import MarketingPage from "./components/MarketingPage";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={MarketingPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
