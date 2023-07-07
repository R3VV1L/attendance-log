import { Header } from "../header/Header.tsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};