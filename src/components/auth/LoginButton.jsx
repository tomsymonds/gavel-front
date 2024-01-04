import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "http://localhost:5173/",
      },
    });
  };

  return (
    <Button className="button__login" onClick={handleLogin}>
      Log In
    </Button>
  );
};

export default LoginButton