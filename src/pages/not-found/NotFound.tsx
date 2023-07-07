import { NavLink } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="err">
      <h1>404</h1>
      <h2>404</h2>
      <h3>404</h3>
      <NavLink to={"/"}>Перейти назад</NavLink>
    </div>
  );
};