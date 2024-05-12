import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveLogin(response) {
  const jwtToken = response.data.token;
  const jwtRefreshToken = response.data.refreshToken;
  const user = JSON.stringify(response.data.user);
  await AsyncStorage.setItem("jwtToken", jwtToken);
  await AsyncStorage.setItem("jwtRefreshToken", jwtRefreshToken);
  await AsyncStorage.setItem("user", user);
  await AsyncStorage.setItem("isLoggedIn", "true");
}
