import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { saveLogin } from "../utils/user";

import CustomButton from "./CustomButton";
import BackIcon from "../assets/splashImages/backIcon";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const figmaWidth = 375;
const figmaHeight = 812;

const SignUpScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const openPrivacyPolicy = (title) => {
    // Navigate to the Privacy Policy screen with the title
    navigation.navigate("PrivacyPolicy", { title });
  };
  const handleSignUp = async () => {
    // Split fullName into firstName and lastName
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || " ";

    // Password Validation
    if (password !== confirmPassword) {
      Alert.alert("Erro", "Senhas não são iguais");
      return;
    }
    setIsLoading(true);
    try {
      await axios
        .post(`${process.env.EXPO_PUBLIC_API_URL}/auth/email/register`, {
          email,
          password,
          firstName,
          lastName,
        })
        .then(async () => {
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
        });
    } catch (error) {
      setIsLoading(false);
      console.error("error signup form", error);
      Alert.alert("Não foi possivel cadastrar", "" + error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <BackIcon style={styles.backIcon} />
        <Text style={styles.backText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.nameFieldContainer}>
        <Text style={styles.label}>
          Nome Completo
          <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          onChangeText={setFullName}
          value={fullName}
        />
      </View>

      <View
        style={[
          styles.fieldContainer,
          { top: 223 * (screenHeight / figmaHeight) },
        ]}
      >
        <Text style={styles.label}>
          Email
          <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
      </View>
      <View
        style={[
          styles.fieldContainer,
          { top: 331 * (screenHeight / figmaHeight) },
        ]}
      >
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          onChangeText={setPhone}
          value={phone}
          keyboardType="phone-pad"
        />
      </View>
      <View
        style={[
          styles.fieldContainer,
          { top: 428 * (screenHeight / figmaHeight) },
        ]}
      >
        <Text style={styles.label}>
          Senha
          <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <View
        style={[
          styles.fieldContainer,
          { top: 525 * (screenHeight / figmaHeight) },
        ]}
      >
        <Text style={styles.label}>
          Confirmar Senha
          <Text style={styles.asterisk}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite novamente sua senha"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.agreementContainer}>
        <Text style={styles.agreementText}>
          Ao continuar você concorda com o{" "}
          <Text
            style={styles.highlightedText}
            onPress={() => openPrivacyPolicy("Termo de Uso")}
          >
            Termo de Uso
          </Text>{" "}
          e confirma que leu a{" "}
          <Text
            style={styles.highlightedText}
            onPress={() => openPrivacyPolicy("Política de Privacidade")}
          >
            Política de Privacidade
          </Text>{" "}
          da Ficard.
        </Text>
      </View>
      <View style={styles.signUpButtonContainer}>
        <CustomButton text="Cadastrar" onPress={handleSignUp} />
      </View>
      <View>
        {isLoading && <ActivityIndicator size="large" color="##FFFFFF" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: screenWidth,
    height: 60 * (screenHeight / figmaHeight),
    paddingHorizontal: 24,
    paddingVertical: 18 * (screenHeight / figmaHeight),
    position: "absolute",
    top: (50 * screenHeight) / figmaHeight,
    left: (10 * screenWidth) / figmaWidth,
  },
  backText: {
    fontFamily: "Urbanist",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "center",
    color: "#FFFFFF",
    marginLeft: 50,
  },
  nameFieldContainer: {
    position: "absolute",
    top: 125 * (screenHeight / figmaHeight),
    left: 24,
    width: 327 * (screenWidth / figmaWidth),
    height: 82,
  },
  label: {
    fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  asterisk: {
    color: "#FF0000",
  },
  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#242424",
    color: "#F4F4F4",
    borderRadius: 28,
    paddingHorizontal: 16,
  },
  fieldContainer: {
    position: "absolute",
    left: 24,
    width: 327 * (screenWidth / figmaWidth),
    height: 82,
  },
  agreementContainer: {
    position: "absolute",
    top: 626 * (Dimensions.get("window").height / 812),
    left: 35,
    width: 310,
    height: 48,
  },
  agreementText: {
    fontFamily: "Urbanist",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: -0.015,
    textAlign: "left",
    color: "#FFFFFF",
  },
  highlightedText: {
    color: "#E8772E",
    textDecorationLine: "underline",
    margin: 5,
  },
  signUpButtonContainer: {
    position: "absolute",
    top: 693 * (Dimensions.get("window").height / 812),
    left: 24,
    width: 327 * (Dimensions.get("window").width / 375),
    height: 56,
    borderRadius: 150,
  },
});

export default SignUpScreen;
