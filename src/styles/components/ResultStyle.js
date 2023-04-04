import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: "#3F51B5",
    alignSelf: "center",
    height: 127,
    width: 314,
    borderRadius: 10,
    margin: 5,
    top: 94,
  },
  quizName: {
    color: "#ffffff",
    fontFamily: "PoppinsBold",
    fontSize: 27,
    top: 10,
    left: 10,
  },
  attemptNum: {
    color: "#ffffff",
    fontFamily: "PoppinsBold",
    fontSize: 15,
    top: 24,
    left: 18,
  },
  correctNum: {
    color: "#ffffff",
    fontFamily: "PoppinsBold",
    fontSize: 20,
    top: 28,
    left: 18,
  },
  date: {
    color: "#ffffff",
    fontFamily: "PoppinsBold",
    textAlign: "right",
    fontSize: 14,
    top: 5,
    right: 15,
  },

  greenBorder: {
    borderWidth: 5,
    borderColor: "#00FF00",
    borderRadius: 10,
  },

  yellowBorder: {
    borderWidth: 5,
    borderColor: "#FFFF00",
    borderRadius: 10,
  },

  redBorder: {
    borderWidth: 5,
    borderColor: "#FF0000",
    borderRadius: 10,
  },
});
