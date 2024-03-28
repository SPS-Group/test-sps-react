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
    throw new Error("Not implemented");
  },
  async delete(id) {
    throw new Error("Not implemented");
  },
  async update(id, data) {
    const users = await api.put(`/users/${id}`, data);
    return users;
  }
}

export default UserService;
