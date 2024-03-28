import Button from "../Button/Button";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
    const responseMessage = (response:any) => {
        console.log(response);
    };
    // const errorMessage = (error:any) => {
    //     console.log(error);
    // };
  return <div>
    <Button>Login</Button>
    <GoogleLogin onSuccess={responseMessage}/>
  </div>;
}

export default Login;
