import { loginApi, registerApi } from "../api/authApi";

export const register = async (data) => {
  try {
    const res = await registerApi(data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Register failed" };
  }
};

export const login = async (data) => {
  try {
    const res = await loginApi(data);

    const { token, user } = res.data;

    // lưu token
    localStorage.setItem("token", token);

    // lưu user (optional)
    localStorage.setItem("user", JSON.stringify(user));

    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};
