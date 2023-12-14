// RegistrationForm.tsx

import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isPasswordValid = (): boolean => {
    // Adicione aqui a lógica para verificar a força da senha.
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(formData.password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    if (!isPasswordValid()) {
      alert('A senha não atende aos requisitos mínimos.');
      return;
    }

    // Lógica adicional para enviar os dados do formulário.
    console.log('Formulário enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuário:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />

      <label>
        Senha:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />

      <label>
        Confirmar Senha:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </label>
      <br />

      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistrationForm;
