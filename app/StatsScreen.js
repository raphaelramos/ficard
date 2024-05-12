import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import ListItem from "./ListItem";
import SlidingViewForListItem from "./SlidingViewForListItem";
import axiosInstance from "../utils/axiosInstance";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const figmaWidth = 375;
const figmaHeight = 812;

const StatsScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayLimit, setDisplayLimit] = useState(5);
  const [isSlidingViewVisible, setIsSlidingViewVisible] = useState(false);
  const [selectedItemData, setSelectedItemData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/transactions?page=1&pageSize=20`)
        .then((response) => {
          setTransactions(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const fetchFake = async () => {
      let fakeTransactions = [
        {
          id: 1,
          categoryId: 1,
          description: "Netflix",
          amount: "55.00",
          currency: "BRL",
          date: "2024-05-11 12:22:00",
          type: "CARD",
        },
        {
          id: 2,
          categoryId: 2,
          description: "Amazon",
          amount: "90.00",
          currency: "BRL",
          date: "2024-05-02 11:40:00",
          type: "DEBIT",
        },
        {
          id: 3,
          categoryId: 1,
          description: "Google Play",
          amount: "25.00",
          currency: "BRL",
          date: "2024-04-30 08:02:00",
          type: "CARD",
        },
      ];
      setTransactions(fakeTransactions);
      setLoading(false);
    };

    // fetchData(); // Real API
    fetchFake();
  }, []);

  const renderTransaction = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedItemData(item); // Store the selected item data
        setIsSlidingViewVisible(true); // Show the SlidingViewForListItem
      }}
    >
      <ListItem
        categoryId={item.categoryId}
        description={item.description}
        amount={item.amount}
        date={item.date}
        type={item.type}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topEmptyView} />
      <View style={styles.titleView}>
        {/* <Text style={styles.titleText}>Lista</Text> */}
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listHeaderContainer}>
          <Text style={styles.listTitle}>Last Transactions</Text>
          {/* <TouchableOpacity
            onPress={() => setDisplayLimit(transactions.length)}
          >
            <Text style={styles.seeAllTextButton}>Carregar mais</Text>
          </TouchableOpacity> */}
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#FFFFFF" />
        ) : (
          <FlatList
            // data={transactions.slice(0, displayLimit)}
            data={transactions}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>

      {isSlidingViewVisible && (
        <SlidingViewForListItem
          onRequestClose={() => setIsSlidingViewVisible(false)} // Close the sliding view
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#000000",
  },
  topEmptyView: {
    width: screenWidth,
    height: 44 * (screenHeight / figmaHeight),
    backgroundColor: "transparent",
  },
  titleView: {
    width: 374 * (screenWidth / figmaWidth),
    height: 60,
    paddingVertical: 18,
    paddingHorizontal: 146.5 * (screenWidth / figmaWidth),
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Urbanist-Bold",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "center",
    color: "#F4F4F4",
  },
  listContainer: {
    flex: 1,
    width: screenWidth,
    marginTop: 20 * (screenHeight / figmaHeight),
    paddingVertical: 20 * (screenHeight / figmaHeight),
    backgroundColor: "#242424",
    borderTopLeftRadius: 28 * (screenHeight / figmaHeight),
    borderTopRightRadius: 28 * (screenHeight / figmaHeight),
  },
  listHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24 * (screenWidth / figmaWidth),
  },
  listTitle: {
    fontFamily: "Urbanist",
    fontSize: 18,
    fontWeight: "700",
    color: "#F4F4F4",
  },
  seeAllTextButton: {
    fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
    color: "#CBCBCB",
  },
});

export default StatsScreen;
