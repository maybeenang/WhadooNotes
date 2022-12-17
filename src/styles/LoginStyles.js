import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  toggle: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  flatImage: {
    marginBottom: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: "900",
    alignSelf: "flex-start",
  },
  inpuContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 18,
    width: "80%",
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  otherTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
