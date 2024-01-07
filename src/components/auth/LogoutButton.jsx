import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react"

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button className="button__logout" onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton