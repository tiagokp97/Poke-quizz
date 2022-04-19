import { Switch, Route } from "react-router";
import { LandingPage } from "../pages/LandingPage/LandingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/pokequiz"></Route>

      {/* <Route exact path={`/pokequiz/:${modalidade}`}></Route> */}
      <Routes exact path={`/contato`}></Routes>
    </Switch>
  );
};
export { Routes };
