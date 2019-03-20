import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Sigin, Register } from "./Components/App";
import BlogsSIgin from "./Components/Blogs";

const userInfo = {
  isSignin: true,
  name: "高二丽",
  uId: 1
};

export const UserContext = createContext();

// 2.基于路由的代码拆分
const Index = () => (
  <Router>
    <Switch>
      <UserContext.Provider value={userInfo}>
        <Route exact path="/" component={BlogsSIgin} />
        <Route exact path="/sigin" component={Sigin} />
        <Route exact path="/register" component={Register} />
      </UserContext.Provider>
      {/* <Route exact path="/sigin" component={Sigin} /> */}
      {/* <Route path="/homeIndex" exact component={HomeIndex} />

      <Route exact path="/productBox" component={ProductBox} />
      <Route path="/app" component={App} />
      <Route path="/clock" component={Clock} />
      <Route path="/toggle" component={Toggle} />
      <Route path="/welcomeDialog" component={WelcomeDialog} />

      <Route path="/" component={Sigin} /> */}
    </Switch>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById("root"));
