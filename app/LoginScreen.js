/* eslint-disable no-lone-blocks */
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Keyboard,
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import { saveLogin } from "../utils/user";

import CustomButton from "./CustomButton";
import SignUpButton from "./SignUpButton";
import SocialSignInButton from "./SocialSignInButton";
import AppleLogo from "../assets/cardsScreen/AppleLogo";
import GoogleIcon from "../assets/cardsScreen/GoogleIcon";
import BackIcon from "../assets/splashImages/backIcon"; // Adjust path as needed
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const figmaWidth = 375;
const figmaHeight = 812;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertKey, setAlertKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const shakeAnimation = new Animated.Value(0);
  const fadeAnimation = new Animated.Value(1);

  const startShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const startFadeAnimation = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    let timer;
    if (showAlert) {
      startShakeAnimation();
      timer = setTimeout(() => {
        startFadeAnimation();
      }, 1100);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);

  const handleLoginPress = async () => {
    // Reset animations and hide alert
    Keyboard.dismiss();
    shakeAnimation.setValue(0);
    fadeAnimation.setValue(1);
    setShowAlert(false);

    if (!validateEmail(email)) {
      setShowAlert(true);
      startShakeAnimation();
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/auth/email/login`,
        {
          email,
          password,
        },
      );

      await saveLogin(response);

      setIsLoading(false);
      navigation.navigate("Card");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setShowAlert(true);
      startShakeAnimation();
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  const handleIgnoreLoginPress = async () => {
    Keyboard.dismiss();
    let fakeResponse = {
      data: {
        token: "string",
        refreshToken: "string",
        tokenExpires: 0,
        user: {
          id: 0,
          email: "john@example.com",
          provider: "email",
          socialId: "1234567890",
          firstName: "John",
          lastName: "Example",
          photo: {
            id: "cbcfa8b8-3a25-4adb-a9c6-e325f0d0f3ae",
            path: "https://example.com/path/to/file.jpg",
          },
          role: {
            id: 0,
            name: "admin",
          },
          status: {
            id: 0,
            name: "active",
          },
          createdAt: "2024-05-12T04:51:25.461Z",
          updatedAt: "2024-05-12T04:51:25.461Z",
        },
      },
    };
    await saveLogin(fakeResponse);
    navigation.navigate("Card");
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In Pressed");
  };

  const handleAppleSignIn = () => {
    console.log("Apple Sign-In Pressed");
  };

  const handleForgotPasswordPress = () => {
    console.log("Forgot Password Pressed");
  };
  {
    // eslint-disable-next-line no-unused-expressions
    showAlert && (
      <Animated.View
        key={alertKey}
        style={[
          styles.alertBox,
          {
            transform: [{ translateX: shakeAnimation }],
            opacity: fadeAnimation,
          },
        ]}
      >
        <Text style={styles.alertText}>email ou senha incorretos</Text>
      </Animated.View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground
        source={require("../assets/splashImages/background.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.backContainer}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => navigation.goBack()}
            >
              <BackIcon />
            </TouchableOpacity>

            {/* <Text style={styles.backText}>Voltar</Text> */}
          </View>
          <Text style={styles.welcomeText}>Ficard</Text>
          <View style={styles.emailContainer}>
            <Text style={styles.emailLabel}>
              <Text>Email</Text>
              <Text style={styles.asterisk}>*</Text>
            </Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Insira seu email"
              placeholderTextColor="#F4F4F4"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordLabel}>
              <Text>Senha</Text>
              <Text style={styles.asterisk}>*</Text>
            </Text>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry
              placeholder="Insira sua Senha"
              placeholderTextColor="#F4F4F4"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.loginButtonContainer}>
            <CustomButton onPress={handleLoginPress} text="Login" />
          </View>
          <View style={styles.ignoreLoginButtonContainer}>
            <CustomButton
              onPress={handleIgnoreLoginPress}
              text="Ignore Login"
            />
          </View>
          {/* <Text
            style={styles.forgotPassword}
            onPress={handleForgotPasswordPress}
          >
            Forgot password?
          </Text> */}
          {showAlert && (
            <Animated.View
              style={[
                styles.alertBox,
                {
                  transform: [{ translateX: shakeAnimation }],
                  opacity: fadeAnimation,
                },
              ]}
            >
              <Text style={styles.alertText}>email ou senha incorretos</Text>
            </Animated.View>
          )}

          <View style={styles.separatorContainer}>
            <View style={styles.rectangle} />
            <Text style={styles.separatorText}>ou</Text>
            <View style={styles.rectangle} />
          </View>
          <View style={styles.signUpButtonContainer}>
            <SignUpButton onPress={handleSignUpPress} text="Sign up" />
          </View>
          <View style={styles.googleSignInButtonContainer}>
            <SocialSignInButton
              onPress={handleGoogleSignIn}
              text="Continue with Google"
              IconComponent={GoogleIcon}
            />
          </View>

          <View style={styles.appleSignInButtonContainer}>
            <SocialSignInButton
              onPress={handleAppleSignIn}
              text="Continue with Apple"
              IconComponent={AppleLogo}
            />
          </View>

          <View>
            {isLoading && <ActivityIndicator size="large" color="##FFFFFF" />}
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: (75 * screenWidth) / figmaWidth,
    height: (24 * screenHeight) / figmaHeight,
    position: "absolute",
    top: (71 * screenHeight) / figmaHeight,
    left: (16 * screenWidth) / figmaWidth,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    paddingVertical: 6,
  },
  backText: {
    width: 43,
    height: 24,
    marginLeft: 8,
    fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "left",
    color: "#F4F4F4",
  },
  welcomeText: {
    width: (327 * screenWidth) / figmaWidth,
    height: (45 * screenHeight) / figmaHeight,
    position: "absolute",
    top: (115 * screenHeight) / figmaHeight,
    left: (24 * screenWidth) / figmaWidth,
    fontFamily: "Urbanist",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 45,
    textAlign: "left",
    color: "#F4F4F4",
  },
  emailContainer: {
    position: "absolute",
    top: (207 * screenHeight) / figmaHeight,
    left: (24 * screenWidth) / figmaWidth,
    width: (327 * screenWidth) / figmaWidth,
  },
  emailLabel: {
    fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    color: "#F4F4F4",
  },
  asterisk: {
    color: "#DC1F26",
  },

  emailInput: {
    fontFamily: "Urbanist",
    width: "100%",
    height: 56,
    marginTop: 5,
    borderRadius: 28,
    backgroundColor: "#242424",
    color: "#F4F4F4",
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "left",
    paddingLeft: 16,
  },
  passwordContainer: {
    position: "absolute",
    top: (289 * screenHeight) / figmaHeight,
    left: (24 * screenWidth) / figmaWidth,
    width: (327 * screenWidth) / figmaWidth,
  },
  passwordLabel: {
    fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    color: "#939393",
  },
  passwordInput: {
    fontFamily: "Urbanist",
    width: "100%",
    height: 56,
    marginTop: 5,
    borderRadius: 28,
    backgroundColor: "#242424",
    color: "#939393",
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "left",
    paddingLeft: 16,
  },
  loginButtonContainer: {
    position: "absolute",
    top: (395 * screenHeight) / figmaHeight,
    left: (24 * screenWidth) / figmaWidth,
    width: (327 * screenWidth) / figmaWidth,
  },
  ignoreLoginButtonContainer: {
    position: "absolute",
    top: (465 * screenHeight) / figmaHeight,
    left: (24 * screenWidth) / figmaWidth,
    width: (327 * screenWidth) / figmaWidth,
  },
  forgotPassword: {
    width: (92 * screenWidth) / figmaWidth,
    height: (24 * screenHeight) / figmaHeight,
    position: "absolute",
    top: (472 * screenHeight) / figmaHeight,
    left: (141 * screenWidth) / figmaWidth,
    fontFamily: "Urbanist",
    fontSize: (12 * screenHeight) / figmaHeight,
    fontWeight: "400",
    lineHeight: (24 * screenHeight) / figmaHeight,
    letterSpacing: -0.015,
    textAlign: "left",
    color: "#E8772E",
  },
  separatorContainer: {
    width: (327 * screenWidth) / figmaWidth,
    height: (17 * screenHeight) / figmaHeight,
    position: "absolute",
    top: (548 * screenHeight) / figmaHeight,
    left: (25 * screenWidth) / figmaWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangle: {
    width: (135 * screenWidth) / figmaWidth,
    height: (1 * screenHeight) / figmaHeight,
    backgroundColor: "#515558",
  },
  separatorText: {
    fontFamily: "Urbanist",
    fontSize: (14 * screenHeight) / figmaHeight,
    fontWeight: "400",
    lineHeight: (17 * screenHeight) / figmaHeight,
    color: "#515558",
  },
  signUpButtonContainer: {
    position: "absolute",
    top: (594.5 * screenHeight) / figmaHeight,
    left: (33 * screenWidth) / figmaWidth,
    width: (308 * screenWidth) / figmaWidth,
    height: 43,
    borderRadius: 28,
    borderColor: "#242424",
    borderWidth: 2,
    paddingVertical: (12 * screenHeight) / figmaHeight,
    paddingHorizontal: (51 * screenWidth) / figmaWidth,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.26,
    shadowRadius: 20,
    elevation: 5,
    overflow: "hidden",
    marginTop: (12 * screenHeight) / figmaHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  googleSignInButtonContainer: {
    position: "absolute",
    top: (649 * screenHeight) / figmaHeight,
    left: (34 * screenWidth) / figmaWidth,
    width: (311 * screenWidth) / figmaWidth,
    height: (54 * screenHeight) / figmaHeight,
  },
  appleSignInButtonContainer: {
    position: "absolute",
    top: (708 * screenHeight) / figmaHeight,
    left: (34 * screenWidth) / figmaWidth,
    width: (311 * screenWidth) / figmaWidth,
    height: (54 * screenHeight) / figmaHeight,
  },
  alertBox: {
    width: (336 * screenWidth) / figmaWidth,
    height: (59 * screenHeight) / figmaHeight,
    position: "absolute",
    top: (469 * screenHeight) / figmaHeight,
    left: (17 * screenWidth) / figmaWidth,
    backgroundColor: "#FF3838",
    borderRadius: 6,
    padding: (20 * screenHeight) / figmaHeight,
    justifyContent: "center",
  },
  alertText: {
    width: (296 * screenWidth) / figmaWidth,
    height: (20 * screenHeight) / figmaHeight,
    fontFamily: "Urbanist",
    fontSize: (16 * screenHeight) / figmaHeight,
    fontWeight: "400",
    lineHeight: (20 * screenHeight) / figmaHeight,
    color: "#FFFFFF",
    textAlign: "left",
  },
  loadingContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000080",
    justifyContent: "center",
  },
});

export default LoginScreen;
