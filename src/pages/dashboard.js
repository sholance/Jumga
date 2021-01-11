import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Browse from "../components/Browse";
import Categories from "../components/Categories";
import Members from "../components/Members";
import Membership from "../components/Membership";
import {
  BrowserRouter,
  Switch,
  Route,
  // NavLink,
  // Link,
} from "react-router-dom";

export default function dashboard() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/Browse">
              <Browse />
            </Route>
            <Route path="/Categories">
              <Categories />
            </Route>
            <Route path="/Members">
              <Members />
            </Route>
            <Route path="/Membership">
              <Membership />
            </Route>
          </Switch>
        </>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
