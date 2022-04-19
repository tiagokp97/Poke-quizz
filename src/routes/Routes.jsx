import { Switch, Route } from "react-router";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/pokequiz"></Route>
      {/* <Route exact path={`/pokequiz/:${modalidade}`}></Route> */}
    </Switch>
  );
};
export { Routes };
