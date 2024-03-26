import {StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingLeft: 15,
      // paddingRight: 15,
      paddingTop: 45,
      paddingBottom: 80,
    },
    innerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    input: {
      width: "80%"
    }
  });