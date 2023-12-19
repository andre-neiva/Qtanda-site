import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './style.css';

export default function BasicDetails() {
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordStrong = (password: string): boolean => {
    const strongPassWordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    return strongPassWordRegex.test(password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value ?? '';
    setPassword(passwordValue);
    if (!isPasswordStrong(passwordValue)) {
      setWeakPassword(true);
    } else {
      setWeakPassword(false);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const confirmPasswordValue = e.target.value ?? '';
    setConfirmPassword(confirmPasswordValue);
    const passwordHasChanged = !!password && e.target.value !== password;
    setPasswordMismatch(passwordHasChanged);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="details-container">
        <div className="input-row">
          <label className="label-text">
            Email:
            <br />
            <input
              type="email"
              name="email"
              className="input-container"
              value={email}
              onChange={(e) => setEmail(e.target.value ?? '')}
            />
          </label>
          <label className="label-text">
            CNPJ:
            <br />
            <input
              type="text"
              name="cnpj"
              className="input-container"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value ?? '')}
            />
          </label>
        </div>
        <div className="input-row">
          <label className="label-text">
            Senha:
            <br />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="input-container"
              value={password}
              onChange={handlePasswordChange}
            />
            <span onClick={togglePasswordVisibility} className="password-icon">
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            <br />
            {weakPassword && password && (
              <p className="weak-password">
                A senha deve conter pelo menos um número, um caractere especial e uma letra maiúscula.
              </p>
            )}
          </label>
          <label className="label-text">
            Nome completo:
            <br />
            <input
              type="text"
              name="fullName"
              className="input-container"
              value={fullName}
              onChange={(e) => setFullName(e.target.value ?? '')}
            />
          </label>
        </div>
        <div className="input-row">
          <label className="label-text">
            Confirmar senha:
            <br />
            <input
              type="password"
              name="confirmPassword"
              className="input-container"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <br />
            {passwordMismatch && <p className="password-mismatch">As senhas não são iguais</p>}
          </label>
          <label className="label-text">
            CPF:
            <br />
            <input
              type="text"
              name="cpf"
              className="input-container"
              value={cpf}
              onChange={(e) => setCpf(e.target.value ?? '')}
            />
          </label>
        </div>
      </section>
      <section className="checkbox-row">
        <input
          type="checkbox"
          id="confirmation"
          name="confirmation"
          checked={confirmation}
          onChange={(e) => setConfirmation(e.target.checked ?? false)}
        />
        <label htmlFor="confirmation" className="confirmation-text">
          Ao clicar nesse botão, confirmo que meu estabelecimento possui motoboys.
        </label>
      </section>
    </>
  );
}
