// @ts-ignore
import React from "react";
import "./ForgotPassword.css";
import { SguSvg } from "../../assets/SguSvg.tsx";
import { NavLink } from "react-router-dom";

export const ForgotPassword = () => {
  
  return (
    <div className="forgot-block">
      <div className="svg-container">
        <SguSvg />
      </div>
      <p className="forgot-block-head-text">Восстановление пароля</p>
      <p className="forgot-block-info-text">Введите ваш email для отправки инструкции по восстановлению пароля</p>
      <form className="forgot-style" action="#" method="post">
        <div className="forgot-pass">
          <input
            className="email-input-text"
            type="email"
            name="forgot-pass"
            placeholder="Адрес эл. почты"
            required
          />
        </div>
      </form>
      <div className="forgot-block-submit">
        <NavLink
          to="/authorization-guest"
          className="forgot-block-auth-text"
        >
          На страницу входа
        </NavLink>
        <button
          className="forgot-block-submit-button"
          type="submit"
          name="forgot-submit"

        >
          Отправить
        </button>
      </div>
    </div>          
  );
};