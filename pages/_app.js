import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";

import { auth, db } from "../firebase";
import "../styles/globals.css";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
