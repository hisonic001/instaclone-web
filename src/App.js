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
  const isloggedIn = true;
  return (
    <Router>
      {/* switch로 한번에 하나의 route만 가능하게 */}
      <Switch>
        <Route path="/" exact>
          {isloggedIn ? <Home /> : <Login />}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
