import Login from "./Login";
import { ProfileType } from "./Profile";

type ProvateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileType>;
};

const Private = ({ isLoggedIn, component: Component }: ProvateProps) => {
  if (isLoggedIn) {
    return <Component name="nayzaw" />;
  } else {
    return <Login />;
  }
};

export default Private;
