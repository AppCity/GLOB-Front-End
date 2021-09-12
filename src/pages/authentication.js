import Head from "../components/Head";
import AuthenticationScreen from "../screens/Authentication/AuthenticationScreen";

const authentication = (props) => {
  return (
    <>
      <Head title="Authentication" content="Login/Register to GLOB" />
      <AuthenticationScreen />
    </>
  );
};

authentication.propTypes = {};

export default authentication;
