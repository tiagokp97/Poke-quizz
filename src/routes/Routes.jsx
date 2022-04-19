import { Switch, Route } from "react-router";

import { MobileMenu } from "../components/MobileMenu/MobileMenu";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MobileMenu />
      </Route>
      <Route exact path="/pokequiz"></Route>

      {/* <Route exact path={`/pokequiz/:${modalidade}`}></Route> */}
      <Routes exact path={`/contato`}></Routes>
    </Switch>
  );
};
export { Routes };
