import { Switch, Route } from "react-router";

import { LandingPage } from "../components/landingPage/landingPage";

import { GamePage } from "../pages/gamePage/gamePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage></LandingPage>
        {/* <GamePage /> */}

        {/* <GamePage /> */}
      </Route>
      <Route exact path="/pokequiz"></Route>

      {/* <Route exact path={`/pokequiz/:${modalidade}`}></Route> */}
      <Routes exact path={`/contato`}></Routes>
    </Switch>
  );
};
export { Routes };
