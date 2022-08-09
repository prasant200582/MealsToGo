import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={StyleSheet.card}>
      <Card.Cover
        key={name}
        style={StyleSheet.cover}
        source={{ uri: photos[0] }}
      />
      <Title style={styles.title}>{name}</Title>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
