import { isdarkVar, isLoggedInVar } from "./apollo";
import { useReactiveVar } from "@apollo/client";
import { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
  // login 여부 확인
  // useReactiveVar을 통해서 반환된 변수값이 달라지면
  // Re-Randering의 Trigger로 작용된다.
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isDark = useReactiveVar(isdarkVar);

  // const [isloggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      {/* switch로 한번에 하나의 route만 가능하게 */}
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        {/* 정해지지 않은 루트로 진입시  Not Found return*/}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
