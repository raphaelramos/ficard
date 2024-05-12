import { format, parseISO } from "date-fns";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import BankIcon from "../assets/cardsScreen/BankIcon";
import CardIcon from "../assets/cardsScreen/CardIcon";
import { currencyFormat } from "../utils/parseLocaleNumber";

// Inside ListItem component

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const figmaWidth = 375;
const figmaHeight = 812;
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const ListItem = ({ categoryId, description, amount, date, type }) => {
  // Determine the icon based on categoryId
  const Icon = type === "DEBIT" ? BankIcon : CardIcon;
  const formattedDate = format(parseISO(date), "dd MMM, HH:mm");
  // Format the amount
  const formattedAmount =
    amount > 0
      ? `+ R$ ${currencyFormat(amount || 0)}`
      : `- R$ ${currencyFormat(Math.abs(amount || 0))}`;

  const truncatedTitle = truncateText(description, 18);

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.iconAndTextContainer}>
        <View style={styles.iconBackground}>
          <Icon width={26} height={26} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{truncatedTitle}</Text>
          {/* <Text style={styles.subtitle}>{truncatedSubtitle}</Text> */}
        </View>
      </View>
      <View style={styles.amountAndDateContainer}>
        <Text
          style={[styles.amount, { color: amount < 0 ? "#FF3838" : "#33E870" }]}
        >
          {formattedAmount}
        </Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

// Add your styles here
const styles = StyleSheet.create({
  listItemContainer: {
    width: 340 * (screenWidth / figmaWidth),
    height: 75 * (screenHeight / figmaHeight),
    margin: 16 * (screenWidth / figmaWidth),
    padding: 16 * (screenWidth / figmaWidth),
    backgroundColor: "#151515",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBackground: {
    width: 38 * (screenWidth / figmaWidth),
    height: 38 * (screenHeight / figmaHeight),
    borderRadius: 100,
    backgroundColor: "rgba(232,119,46, 0.30)",
    justifyContent: "center",
    alignItems: "center",
    // Icon styles can be added here
  },
  textContainer: {
    paddingLeft: 14,
  },
  title: {
    color: "#F4F4F4",
    fontSize: 16 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist",
    fontWeight: "700",
  },
  subtitle: {
    color: "#939393",
    fontSize: 12 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist",
    fontWeight: "500",
  },
  amountAndDateContainer: {
    alignItems: "flex-end",
  },
  amount: {
    textAlign: "right",
    color: "#33E870",
    fontSize: 16 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist",
    fontWeight: "700",
  },
  date: {
    textAlign: "right",
    color: "#939393",
    fontSize: 12 * (screenHeight / figmaHeight),
    fontFamily: "Urbanist",
    fontWeight: "500",
  },
});

export default ListItem;
