import { api, handleRequestError, setAuthToken } from "./api";

const UserService = {
  async list() {
    const users = await api.get('/users');
    return users;
  },
  async get(id) {
    throw new Error("Not implemented");
  },
  async create(data) {
    await api.post(`/users`, data);
  },
  async delete(id) {
    await api.delete(`/users/${id}`);
  },
  async update(id, data) {
    await api.put(`/users/${id}`, data);
  }
}

export default UserService;
