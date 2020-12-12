import React from "react";
import { Switch, Route } from "react-router-dom";

// context
import { AuthProvider } from "./context/AuthContext";

// components
import MarketingPage from "./components/MarketingPage";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={MarketingPage} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
