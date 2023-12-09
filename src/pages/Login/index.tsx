import { useNavigate } from 'react-router-dom';
import './syle.css';

import logoGoogle from '@assets/logoGoogle.svg';
import logoQtanda from '@assets/logoQtanda.svg';

export default function Login() {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate('/forget-password');
  };
  const handleGoogleSignup = () => {
    console.log('login com o google');
  };
  const handleSignUp = () => {
    navigate('/sign-up');
  };
  return (
    <div id="loginContainer">
      <div id="containerHeader">
        <h1 id="title">Sistema</h1>
        <img id="logo" src={logoQtanda} alt="logo" />
      </div>
      <div id="signupContainer">
        <form>
          <label className="inputLabel">Login</label>
          <input className="input" id="loginInput" type="text" placeholder="E-mail, CPF/CNPJ" />
          <label className="inputLabel">Senha</label>
          <input className="input" type="password" placeholder="Digite sua senha" />
          <button id="forgetPasswordBtn" onClick={handleForgotPassword}>
            Esqueci minha senha
          </button>
        </form>
      </div>
      <div id="separterContainer">
        <div className="solid" />
        <span id="separetor">ou</span>
        <div className="solid" />
      </div>
      <button id="googleLoginBtn" onClick={handleGoogleSignup}>
        <img id="googleLogo" src={logoGoogle} alt="" />
      </button>
      <div id="containerFooter">
        <button id="signUpBtn" onClick={handleSignUp}>
          Cadastre-se
        </button>
        <input id="submitBtn" type="submit" value="Entrar" />
      </div>
    </div>
  );
}
