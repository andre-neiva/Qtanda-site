import { useNavigate } from 'react-router-dom';
import './syle.css';

import logoGoogle from '@assets/logoGoogle.svg';
import logoQtanda from '@assets/logoQtanda.svg';
import { RoutesEnum } from '../../enums/routes.enum';

function Login(): JSX.Element {
  const navigate = useNavigate();

  const handleForgotPassword = (): void => {
    navigate(RoutesEnum.FORGET_PASSWORD);
  };

  const handleGoogleSignup = (): void => {
    console.log('login com o google');
  };

  const handleSignUp = (): void => {
    navigate(RoutesEnum.SIGN_UP);
  };

  return (
    <section className="loginContainer">
      <div className="containerHeader">
        <h1 className="title">Sistema</h1>
        <img id="logo" src={logoQtanda} alt="logo" />
      </div>
      <div className="signupContainer">
        <form>
          <label className="inputLabel">Login</label>
          <input className="input loginInput" type="text" placeholder="E-mail, CPF/CNPJ" />
          <label className="inputLabel">Senha</label>
          <input className="input" type="password" placeholder="Digite sua senha" />
          <button className="forgetPasswordBtn" onClick={handleForgotPassword}>
            Esqueci minha senha
          </button>
        </form>
      </div>
      <div className="separterContainer">
        <div className="solid" />
        <span className="separetor">ou</span>
        <div className="solid" />
      </div>
      <button className="googleLoginBtn" onClick={handleGoogleSignup}>
        <img className="googleLogo" src={logoGoogle} alt="" />
      </button>
      <div className="containerFooter">
        <button className="signUpBtn" onClick={handleSignUp}>
          Cadastre-se
        </button>
        <button className="submitBtn" type="submit">
          Entrar
        </button>
      </div>
    </section>
  );
}

export default Login;
