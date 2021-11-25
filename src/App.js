import Home from "./pages/Home";
import Login from "./pages/Login";
import HeroProvider from "./store/HeroProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  const loggedUser = authCtx.isLoggedIn;

  return (
    <HeroProvider>
      <Header />
      <Routes>
        {!loggedUser && <Route path="/login" element={<Login />} />}
        {loggedUser && <Route path="/" element={<Home />} />}
        {!loggedUser && <Route path="/" element={<Navigate to="/login" />} />}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HeroProvider>
  );
};

export default App;
