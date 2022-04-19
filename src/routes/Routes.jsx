import { Switch, Route } from "react-router";

import { GamePage } from "../components/gamePage/gamePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GamePage />
      </Route>
      <Route exact path="/pokequiz"></Route>

      {/* <Route exact path={`/pokequiz/:${modalidade}`}></Route> */}
      <Routes exact path={`/contato`}></Routes>
    </Switch>
  );
};
export { Routes };
