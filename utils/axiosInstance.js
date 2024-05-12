import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  config.headers["Authorization"] =
    `Bearer ${await AsyncStorage.getItem("jwtToken")}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      refresh = true;

      const response = await refreshToken();

      if (!response) {
        Alert.alert("Faça login novamente");
        await AsyncStorage.setItem("isLoggedIn", "false");
      }

      const jwtToken = response.token;
      const jwtRefreshToken = response.refreshToken;
      await AsyncStorage.setItem("jwtToken", jwtToken);
      await AsyncStorage.setItem("jwtRefreshToken", jwtRefreshToken);

      axiosInstance.defaults.headers.common["Authorization"] =
        `Bearer ${jwtToken}`;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

const refreshToken = async () => {
  try {
    const resp = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await AsyncStorage.getItem("jwtRefreshToken")}`,
        },
      },
    ).then((res) => res.json());

    return resp;
  } catch (e) {
    console.log("Error", e);
  }
};

export default axiosInstance;
