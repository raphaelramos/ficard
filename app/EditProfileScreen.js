import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.topBar} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <Text style={styles.backButtonText}>{"<"}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edição de Perfil</Text>
      </View>

      <View style={styles.formSection}>
        {renderInputField("Nome", "Amelia Gustiana")}
        {renderInputField("Email", "uiux.amelll@gmail.com")}
        {renderInputField("Telefone", "+55 34 9 9999-9999")}
        {renderInputField("Senha", "************", true)}
        {renderInputField("Confirmar Senha", "************", true)}

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderInputField = (title, placeholder, isPassword = false) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputTitle}>
      {title}
      <Text style={styles.asterisk}>*</Text>
    </Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={isPassword}
      placeholderTextColor="#939393"
    />
  </View>
);

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const figmaWidth = 375;
const figmaHeight = 812;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  topBar: {
    // Styles for your top bar
    width: 375 * (screenWidth / figmaWidth),
    height: 44 * (screenHeight / figmaHeight),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20 * (screenHeight / figmaHeight),
  },
  backButton: {
    marginRight: 20 * (screenWidth / figmaWidth),
  },
  backButtonText: {
    fontSize: 24 * (screenWidth / figmaWidth),
    color: "#F4F4F4",
  },
  headerTitle: {
    fontSize: 20 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist",
    fontWeight: "700",
    color: "#F4F4F4",
    letterSpacing: 1,
  },
  formSection: {
    paddingHorizontal: 24 * (screenWidth / figmaWidth),
  },
  inputContainer: {
    marginBottom: 20 * (screenHeight / figmaHeight),
  },
  inputTitle: {
    color: "#F4F4F4",
    fontSize: 12 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist",
    fontWeight: "500",
    marginBottom: 10 * (screenHeight / figmaHeight),
  },
  asterisk: {
    color: "#DC1F26",
  },
  input: {
    backgroundColor: "#242424",
    borderRadius: 28,
    color: "#939393",
    paddingHorizontal: 16 * (screenWidth / figmaWidth),
    height: 56 * (screenHeight / figmaHeight),
    fontSize: 14 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist",
    fontWeight: "400",
  },
  saveButton: {
    backgroundColor: "#E8772E",
    borderRadius: 28,
    height: 56 * (screenHeight / figmaHeight),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30 * (screenHeight / figmaHeight),
  },
  saveButtonText: {
    fontSize: 16 * (screenWidth / figmaWidth),
    fontFamily: "Urbanist",
    fontStyle: "italic",
    fontWeight: "500",
    color: "#13131C",
  },
  // Add more styles as needed
});

export default EditProfileScreen;
