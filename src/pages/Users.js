import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import userService from "../services/UserService";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// Componente de modal para edição do usuário
const EditUserModal = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    // Salvar as alterações e fechar a modal
    onSave(user.id, { ...user, name, email });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};
const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { data: users, isLoading } = useQuery({
    queryFn: () => {
      return userService.list();
    },
    queryKey: ['users'],
  });

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleSaveUser = (id, updatedUser) => {
    userService.update(id, updatedUser)
    setSelectedUser(null); // Fechar a modal após salvar
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        { isLoading ? ( <p>"Carregando..."</p>) : (
          users.data.map((user) => (
            <li key={user.id}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <button onClick={() => handleEditUser(user)}>Edit</button>
            </li>
          )))}
      </ul>
      {selectedUser && (
        <EditUserModal user={selectedUser} onSave={handleSaveUser} />
      )}
    </div>
  );
};
export default Users;
