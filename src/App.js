import React from "react";
import Posts from "./components/Posts";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExactPost from "./components/ExactPost";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/:id" component={ExactPost} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
