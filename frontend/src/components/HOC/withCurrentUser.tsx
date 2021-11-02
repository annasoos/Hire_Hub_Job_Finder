import { useState, useEffect, useContext, ComponentType } from "react";
import { UserContext } from "../../utils/context/UserContext";

export function withCurrentUser <T> (Component: ComponentType<T>) {

  const NewComponent = (hocProps: Omit<T, "isLoggedIn" | "user">) => {
		
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const userContext = useContext(UserContext);

    useEffect(() => {
      if (userContext.loggedInUser) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, [userContext]);

    return <Component {...hocProps as T} isLoggedIn={isLoggedIn} user={userContext.loggedInUser} />;
  };

  return NewComponent;
};

export default withCurrentUser;
