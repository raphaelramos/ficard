import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import EditProfileImage from "../assets/cardsScreen/EditProfileImage";
import LogoutButton from "../assets/cardsScreen/LogoutButton";
import VectorButton from "../assets/cardsScreen/VectorButton";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const figmaWidth = 375;
const figmaHeight = 812;

const UserScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      setUser(JSON.parse(await AsyncStorage.getItem("user")));
    }
    fetchUser();
  }, []);

  const handleAccountPress = () => {
    // Navigate to EditProfileScreen within the same tab
    console.log("handleAccountPress");
  };
  const handleLogoutPressPress = async () => {
    await AsyncStorage.removeItem("isLoggedIn");
    navigation.navigate("Login");
  };
  return (
    <View style={styles.screen}>
      <View style={styles.topBar} />
      <Text style={styles.profileTitle}>Perfil</Text>
      <View style={styles.container}>
        <Image
          source={require("../assets/cardsScreen/main_profile_image.png")}
          style={styles.profileImage}
        />
        <EditProfileImage style={styles.editButton} />
      </View>

      <View style={styles.profileSection}>
        <Text style={styles.profileName}>
          {user.firstName} {user.lastName}
        </Text>
        <View style={styles.separator} />
        <Text>{user.email}</Text>

        <View style={styles.contactContainer}>
          <Text style={styles.profileEmail}>{user.email}</Text>
          <View style={styles.separator} />
          <Text style={styles.profilePhone}>+55 64 99999-9999</Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.editProfileCont}
          onPress={handleAccountPress}
        >
          <Text style={styles.itemText}>Change Password</Text>
          <VectorButton />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutContainer}
        onPress={handleLogoutPressPress}
      >
        <LogoutButton style={styles.logoutButton} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.bottomSection}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "black",
  },
  topBar: {
    width: 375 * (screenWidth / figmaWidth),
    height: 44 * (screenHeight / figmaHeight),
  },
  profileSection: {
    width: 375 * (screenWidth / figmaWidth),
    height: 104 * (screenHeight / figmaHeight),
  },
  profileTitle: {
    fontFamily: "Urbanist-Bold",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    color: "#F4F4F4",
    top: 18,
    left: 24,
  },
  container: {
    width: 116 * (screenWidth / figmaWidth),
    height: 116 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 132 * (screenHeight / figmaHeight),
    left: 129 * (screenWidth / figmaWidth),
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 58,
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  profileName: {
    width: 180 * (screenWidth / figmaWidth),
    height: 32 * (screenHeight / figmaHeight),
    top: 219 * (screenHeight / figmaHeight),
    left: 97 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist-Bold",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
    textAlign: "center",
    color: "#F4F4F4",
    position: "absolute",
  },

  contactContainer: {
    width: 287 * (screenWidth / figmaWidth),
    height: 17 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 272 * (screenHeight / figmaHeight),
    left: 45 * (screenWidth / figmaWidth),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  profileEmail: {
    width: 142 * (screenWidth / figmaWidth),
    height: 17 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17 * (screenHeight / figmaHeight),
    textAlign: "center",
    color: "#F4F4F4",
  },
  separator: {
    width: 1 * (screenWidth / figmaWidth),
    height: 17 * (screenHeight / figmaHeight),
    backgroundColor: "#D9D9D9",
  },
  profilePhone: {
    width: 121 * (screenWidth / figmaWidth),
    height: 17 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist",
    fontSize: 14 * (screenWidth / figmaWidth),
    fontWeight: "400",
    lineHeight: 17 * (screenHeight / figmaHeight),
    textAlign: "center",
    color: "#F4F4F4",
    marginLeft: 5,
  },
  mainContainer: {
    width: 323 * (screenWidth / figmaWidth),
    height: 189 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 361 * (screenHeight / figmaHeight),
    left: 26 * (screenWidth / figmaWidth),
    justifyContent: "space-between",
  },
  editProfileCont: {
    width: 323 * (screenWidth / figmaWidth),
    height: 55 * (screenHeight / figmaHeight),
    paddingVertical: 18 * (screenHeight / figmaHeight),
    paddingHorizontal: 16 * (screenWidth / figmaWidth),
    backgroundColor: "#242424",
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  itemText: {
    color: "#F4F4F4",
    fontSize: 16,
    fontFamily: "Urbanist",
    fontWeight: "500",
  },
  logoutContainer: {
    width: 90 * (screenWidth / figmaWidth),
    height: 24 * (screenHeight / figmaHeight),
    position: "absolute",
    top: 578 * (screenHeight / figmaHeight),
    left: 142 * (screenWidth / figmaWidth),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoutButton: {
    width: 24 * (screenWidth / figmaWidth),
    height: 24 * (screenHeight / figmaHeight),
  },
  logoutText: {
    fontFamily: "Urbanist",
    fontSize: 16 * (screenHeight / figmaHeight),
    fontWeight: "400",
    lineHeight: 24 * (screenHeight / figmaHeight),
    color: "#F4F4F4",
    marginLeft: 16 * (screenWidth / figmaWidth),
  },
});

export default UserScreen;
