import React from "react";
import servicesSession from '../services/Session';

function Home() {

  const handleLogout = async () => {
    try {
      await servicesSession.logoutUser();
      console.log('Usuário deslogado com sucesso.');
      // Lógica adicional após o logout...
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      // Tratar erro de logout...
    }
  };

  return (
    <div>
      <h1>SPS REACT TEST</h1>

      <a href="/users">Usuários</a>

      <br />

      <a href="/add-user">Criar Usuários</a>
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
