import { api, handleRequestError, setAuthToken } from "./api";

const Session = {
  async loginUser(params) {
    try {
      const response = await api.post("/login", params);
      setAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return handleRequestError(error);
    }
  },
  
  async logoutUser() {
    // await api.post("/logout");
    setAuthToken("");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
}

export default Session;
