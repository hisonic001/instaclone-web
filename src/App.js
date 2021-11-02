import { colorModeVar, isLoggedInVar } from "./apollo";
import { useReactiveVar } from "@apollo/client";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import NotFound from "./screens/NotFound";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles";
import routes from "./screens/routes";

function App() {
  // login 여부 확인
  // useReactiveVar을 통해서 반환된 변수값이 달라지면
  // Re-Randering의 Trigger로 작용된다.
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const colorMode = useReactiveVar(colorModeVar);

  // const [isloggedIn, setIsLoggedIn] = useState(false);
  return (
    <ThemeProvider theme={colorMode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        {/* switch로 한번에 하나의 route만 가능하게 */}
        <Switch>
          <Route path={routes.login} exact>
            <Login />
          </Route>

          <Route path={routes.signUp}>{isLoggedIn ? null : <SignUp />}</Route>

          {/* 정해지지 않은 루트로 진입시  Not Found return*/}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
