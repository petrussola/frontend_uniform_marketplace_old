import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// context
import { AuthProvider } from "./context/AuthContext";

// components
import MarketingPage from "./components/MarketingPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={MarketingPage} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
