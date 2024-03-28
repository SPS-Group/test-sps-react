import axios, { isAxiosError } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    ...(localStorage.getItem("token") && {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  },
});

export const setAuthToken = (token) => {
	const tokenFromStorage = localStorage.getItem("token");

	if (token || tokenFromStorage) {
		api.defaults.headers.common.Authorization = `Bearer ${token}`;
		localStorage.setItem("token", token);
	} else {
		api.defaults.headers.common.Authorization = undefined;
	}
};

export const handleRequestError = (error) => {
	const isRequestError = isAxiosError(error);
	const responseHasMessage = isRequestError
		? error.response?.data?.message
		: undefined;
	if (responseHasMessage) {
		throw new Error(responseHasMessage);
	}
	throw new Error(error);
};

