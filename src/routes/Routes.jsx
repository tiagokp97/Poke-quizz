import { Switch, Route } from "react-router";

import { HeaderLandingPage } from "../components/headerLandingPage/headerLandingPage";

import { LandingPage } from "../pages/LandingPage/LandingPage";

import { GamePage } from "../pages/gamePage/gamePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">

        <HeaderLandingPage></HeaderLandingPage>

        {/* <LandingPage /> */}
        <GamePage />

      </Route>
      <Route exact path="/pokequiz"></Route>

      {/* <Route exact path={`/pokequiz/:${modalidade}`}></Route> */}
      <Routes exact path={`/contato`}></Routes>
    </Switch>
  );
};
export { Routes };
