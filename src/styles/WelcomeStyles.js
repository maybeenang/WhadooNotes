import { StyleSheet } from "react-native";

export const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  toggle: {
    alignSelf: "flex-end",
  },
  flatImage: {
    marginTop: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40%",
    marginBottom: 20,
  },
  otherTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
