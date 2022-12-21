import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";

const LoginPage = ({ loginSuccess }) => {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    console.log(data);
    if (!error) {
      loginSuccess(data);
    }
  }
  return(
    <section className="login-page">
        <h2>Silahkan masuk untuk melanjutkan...</h2>
        <LoginInput login={onLogin}/>
        <p>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
    </section>
  )
};

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;
