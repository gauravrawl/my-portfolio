"use client"; 
import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

const ClientLayout = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1130); 
    return () => clearTimeout(timer);
  }, []);

  return <>{ showSplash ?  <SplashScreen/>  : children }</>;
};

export default ClientLayout;
