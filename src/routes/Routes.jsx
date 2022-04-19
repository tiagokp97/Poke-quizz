import { Switch, Route } from "react-router";
import { HeaderLandingPage } from "../components/headerLandingPage/headerLandingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HeaderLandingPage></HeaderLandingPage>
      </Route>
      <Route exact path="/pokequiz"></Route>

      {/* <Route exact path={`/pokequiz/:${modalidade}`}></Route> */}
      <Routes exact path={`/contato`}></Routes>
    </Switch>
  );
};
export { Routes };
