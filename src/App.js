import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { fetchUser } from "./utils/fetchUser";

const App = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const user = fetchUser()
    if (!user) navigate('./login')
  },[navigate])
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_API_TOKEN}
    >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
