import { isLoggedInVar } from "../apollo";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      {/* onclick으로 isLoggedVar return 값 반환*/}
      <button onClick={() => isLoggedInVar(true)}>Log in Now!</button>
    </div>
  );
};
export default Login;
